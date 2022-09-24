import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${slug}`
      );

      setPageData(response.data);
    };

    // call the function
    if (slug !== undefined) {
      fetchData();
    }
  }, [slug]);

  return (
    <div>
      {pageData.map((item, key) => (
        <div key={key} className="mb-7">
          <div className="mt-4 flex justify-between align-center">
            <img src={item.flags.png} className="max-w-lg h-auto rounded-lg" />
            <div className="flex flex-col justify-items-start grow ml-4">
              <h1 className="text-7xl  mb-4">{item.name.common}</h1>
              <p className=" mb-4">{item.name.official}</p>
              <ul>
                <li className="shadow-md mb-4 border border-solid border-gray-400 rounded-md p-4">
                  Capital: {item.capital}
                </li>
                <li className="shadow-md mb-4 border border-solid border-gray-400 rounded-md p-4">
                  Continents: {item.continents}
                </li>

                <li className="shadow-md mb-4 border border-solid border-gray-400 rounded-md p-4">
                  Population: {item.population}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}

      <Link href="/countries">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default Detail;
