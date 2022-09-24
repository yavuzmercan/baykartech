import React from "react";
import ActiveLink from "./ActiveLink";

export default function Header() {
  return (
    <div className="header ">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="">
                <div className="ml-10 flex items-baseline space-x-4">
                  <ActiveLink
                    activeClassName="active"
                    href="/countries"
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Anasayfa
                  </ActiveLink>

                  <ActiveLink
                    activeClassName="active"
                    href="/datatable"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Datatable
                  </ActiveLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
