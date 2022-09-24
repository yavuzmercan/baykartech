import styles from "../../styles/Home.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";

import { getCountryAsync, getData } from "../../stores/countries";
import Link from "next/link";

import ReactPaginate from "react-paginate";
import { InputText } from "primereact/inputtext";

export default function Home() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const [nameSortingType, setNameSortingType] = useState("");
  const [regionSortingType, setRegionSortingType] = useState("");
  const [capitalSortingType, setCapitalSortingType] = useState("");

  const nameRef = useRef(null);
  const regionRef = useRef(null);
  const capitalRef = useRef(null);

  useEffect(() => {
    document.title = "Basic Table Example";
    if (countries.length < 1) {
      dispatch(getCountryAsync());
    }
  }, [dispatch]);

  const nameSorting = (e) => {
    const items = [...countries];

    if (nameSortingType === "" || nameSortingType === "asc") {
      setNameSortingType("desc");
      items.sort((a, b) =>
        b.name.localeCompare(a.name, "en", { sensitivity: "base" })
      );
    } else {
      setNameSortingType("asc");
      items.sort((a, b) =>
        a.name.localeCompare(b.name, "en", { sensitivity: "base" })
      );
    }

    dispatch(getData(items));
  };

  const regionSorting = (e) => {
    const items = [...countries];

    if (regionSortingType === "" || regionSortingType === "asc") {
      setRegionSortingType("desc");
      items.sort((a, b) =>
        b.region.localeCompare(a.region, "en", { sensitivity: "base" })
      );
    } else {
      setRegionSortingType("asc");
      items.sort((a, b) =>
        a.region.localeCompare(b.region, "en", { sensitivity: "base" })
      );
    }

    dispatch(getData(items));
  };

  const capitalSorting = (e) => {
    const items = [...countries];

    if (capitalSortingType === "" || capitalSortingType === "asc") {
      setCapitalSortingType("desc");
      items.sort((a, b) =>
        b.capital.localeCompare(a.capital, "en", { sensitivity: "base" })
      );
    } else {
      setCapitalSortingType("asc");
      items.sort((a, b) =>
        a.capital.localeCompare(b.capital, "en", { sensitivity: "base" })
      );
    }

    dispatch(getData(items));
  };

  const Items = ({ currentItems }) => {
    return (
      <>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Flag
              </th>
              <th
                scope="col"
                className={`thead-item px-6 py-3 ${
                  nameSortingType === "asc" ? "asc" : "desc"
                }`}
                ref={nameRef}
                onClick={(e) => nameSorting(e)}
              >
                Name
              </th>
              <th
                scope="col"
                className={`thead-item px-6 py-3 ${
                  regionSortingType === "asc" ? "asc" : "desc"
                }`}
                ref={regionRef}
                onClick={(e) => regionSorting(e)}
              >
                Region
              </th>

              <th
                scope="col"
                className={`thead-item px-6 py-3 ${
                  capitalSortingType === "asc" ? "asc" : "desc"
                }`}
                ref={capitalRef}
                onClick={(e) => capitalSorting(e)}
              >
                Capital
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems &&
              currentItems.map((item, key) => (
                <Link
                  key={key}
                  href={{
                    pathname: "/countries/" + item.code,
                    //query: convertToSlug(cty.name),
                  }}
                >
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                      <img src={item.flag} style={{ height: 25 }} />
                    </td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.region}</td>

                    <td className="px-6 py-4">{item.capital}</td>
                  </tr>
                </Link>
              ))}
          </tbody>
        </table>
      </>
    );
  };

  const PaginatedItems = ({ itemsPerPage }) => {
    // We start with an empty list of items.

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(countries.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(countries.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handleSearch = (val) => {
      const resetSelected = {
        selected: 0,
      };
      setItemOffset(0);
      const endOffset = itemOffset + itemsPerPage;

      handlePageClick(resetSelected);

      var data = countries.filter(
        (c) =>
          c.name.toLowerCase().includes(val) ||
          c.capital.toLowerCase().includes(val)
      );

      if (val !== "") {
        setPageCount(0);
        setCurrentItems(data);
      } else {
        setCurrentItems(countries.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(countries.length / itemsPerPage));
      }
    };

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      console.log(event);
      const newOffset = (event.selected * itemsPerPage) % countries.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

    return (
      <>
        <div className="flex border grow row border-gray-300 p-3 mb-3 align-center justify-between">
          <InputText
            className="border border-gray-300 max-w"
            placeholder="Search"
            style={{ width: "100%" }}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Items currentItems={currentItems} />
        <div>
          <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
        </div>
      </>
    );
  };

  return (
    <div className="mt-10">
      <div className="mx-auto">
        <PaginatedItems itemsPerPage={10} />
      </div>
    </div>
  );
}
