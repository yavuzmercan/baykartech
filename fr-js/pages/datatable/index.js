import { React, useEffect, useState, Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryAsync } from "../../stores/countries";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

const DataTablePages = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(10);
  const [editingRows, setEditingRows] = useState({});
  const [products2, setProducts2] = useState([]);
  const [filters1, setFilters1] = useState(null);
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const dt = useRef(null);

  const cols = [
    { field: "name", header: "Name" },
    { field: "region", header: "Region" },
    { field: "capital", header: "Capital" },
  ];

  const [importedCols, setImportedCols] = useState(cols);

  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  //Export Settings

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, countries);
        doc.save("products.pdf");
      });
    });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(countries);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  //Edit Settings

  const onCustomPage2 = (event) => {
    setFirst2(event.first);
    setRows2(event.rows);
  };

  const onRowEditChange = (e) => {
    setEditingRows(e.data);
  };

  const onRowEditComplete1 = (e) => {
    let _products2 = [...products2];
    let { newData, index } = e;

    _products2[index] = newData;

    setProducts2(_products2);
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  //Filter Settings

  const clearFilter1 = () => {
    initFilters1();
  };

  const template2 = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
      ];

      return (
        <Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Items per page:{" "}
          </span>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </Fragment>
      );
    },
    CurrentPageReport: (options) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
        >
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: { value: null, matchMode: FilterMatchMode.CONTAINS },
      region: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },
      capital: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },
    });
    setGlobalFilterValue1("");
  };

  const renderHeader1 = () => {
    return (
      <div>
        <div className="flex align-items-center export-buttons">
          <Button
            type="button"
            icon="pi pi-file"
            onClick={() => exportCSV(false)}
            className="mr-2"
            data-pr-tooltip="CSV"
          />
          <Button
            type="button"
            icon="pi pi-file-excel"
            onClick={exportExcel}
            className="p-button-success mr-2"
            data-pr-tooltip="XLS"
          />
          <Button
            type="button"
            icon="pi pi-file-pdf"
            onClick={exportPdf}
            className="p-button-warning mr-2"
            data-pr-tooltip="PDF"
          />
        </div>
        <div className="flex justify-content-between">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Clear"
            className="p-button-outlined"
            onClick={clearFilter1}
          />
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue1}
              onChange={onGlobalFilterChange1}
              placeholder="Keyword Search"
            />
          </span>
        </div>
      </div>
    );
  };

  const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    _filters1["global"].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };

  const header1 = renderHeader1();

  const countryFlagTemplate = (rowData) => {
    return <img alt="flag" src={rowData.flag} width={35} />;
  };

  useEffect(() => {
    if (countries.length < 1) {
      dispatch(getCountryAsync());
    }
  }, [dispatch]);

  useEffect(() => {
    setProducts2(countries);
  }, [countries]);

  useEffect(() => {
    document.title = "Data Table Example";
    initFilters1();
  }, []);

  return (
    <div className="mt-10">
      <div className="mx-auto">
        <div className="card">
          <DataTable
            ref={dt}
            value={products2}
            stripedRows
            responsiveLayout="scroll"
            paginator
            paginatorTemplate={template2}
            first={first2}
            rows={rows2}
            onPage={onCustomPage2}
            editMode="row"
            dataKey="id"
            editingRows={editingRows}
            onRowEditChange={onRowEditChange}
            onRowEditComplete={onRowEditComplete1}
            filters={filters1}
            filterDisplay="menu"
            globalFilterFields={["name", "region", "capital"]}
            header={header1}
          >
            <Column
              field="flag"
              header="Flag"
              body={countryFlagTemplate}
              editor={(options) => textEditor(options)}
            />

            {importedCols.map((col, index) => (
              <Column
                sortable
                key={index}
                field={col.field}
                header={col.header}
                editor={(options) => textEditor(options)}
              />
            ))}

            <Column
              rowEditor
              headerStyle={{ width: "10%", minWidth: "8rem" }}
              bodyStyle={{ textAlign: "center" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default DataTablePages;
