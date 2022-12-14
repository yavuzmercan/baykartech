import { useState } from "react";
import styles from "../styles/Header.module.scss";
export default function Header() {
  const [menuShow, setMenuShow] = useState(false);

  const handleMenuShow = () => {
    setMenuShow((menuShow) => !menuShow);
  };

  return (
    <div className="flex max-w-screen-xl">
      <div
        className={`flex flex-row justify-between absolute z-10 items-center top-[15px] md:top-[30px] px-5  ${styles.header}`}
      >
        <div className="flex-none">
          <a href="#" className="text-[30px] font-bold">
            <svg
              width="96"
              height="33"
              viewBox="0 0 96 33"
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.48 16.12C26.5333 20.5467 25.0267 24.3067 21.96 27.4C18.8933 30.4667 15.1333 32.0133 10.68 32.04L0.76 32.12V0.319998H10.6C15 0.319998 18.7333 1.85333 21.8 4.92C24.8667 7.98667 26.4267 11.72 26.48 16.12ZM21.08 16.16C21.0533 13.2267 20.0267 10.76 18 8.76C16 6.73333 13.5333 5.72 10.6 5.72H6.16V26.68L10.64 26.64C13.5733 26.6133 16.0533 25.6 18.08 23.6C20.1067 21.5733 21.1067 19.0933 21.08 16.16ZM63.1913 32H57.7913V0.319998H63.1913V32ZM71.8353 6.64C71.8353 7.54667 71.5286 8.32 70.9153 8.96C70.302 9.57333 69.542 9.88 68.6353 9.88C67.7286 9.88 66.9553 9.57333 66.3153 8.96C65.702 8.32 65.3953 7.54667 65.3953 6.64C65.3953 5.73333 65.702 4.97333 66.3153 4.36C66.9553 3.74666 67.7286 3.44 68.6353 3.44C69.5153 3.44 70.262 3.76 70.8753 4.4C71.5153 5.01333 71.8353 5.76 71.8353 6.64ZM71.3553 32H65.9553V11.24H71.3553V32ZM95.5194 21.88C95.5194 24.8667 94.4794 27.4 92.3994 29.48C90.346 31.56 87.826 32.6 84.8394 32.6C81.826 32.6 79.2794 31.5733 77.1994 29.52C75.146 27.44 74.1194 24.8933 74.1194 21.88C74.1194 18.8933 75.1594 16.3733 77.2394 14.32C79.3194 12.24 81.8527 11.2 84.8394 11.2C87.826 11.2 90.346 12.24 92.3994 14.32C94.4794 16.3733 95.5194 18.8933 95.5194 21.88ZM90.1194 21.88C90.1194 20.44 89.5994 19.2 88.5594 18.16C87.5194 17.12 86.2794 16.6 84.8394 16.6C83.3727 16.6 82.1194 17.12 81.0794 18.16C80.0394 19.1733 79.5194 20.4133 79.5194 21.88C79.5194 23.3467 80.0394 24.6 81.0794 25.64C82.1194 26.68 83.3727 27.2 84.8394 27.2C86.306 27.2 87.546 26.68 88.5594 25.64C89.5994 24.6 90.1194 23.3467 90.1194 21.88Z"
                fill="white"
              />
              <path
                d="M54.9966 32H49.2766L48.1166 28.88C45.9832 31.3867 43.2632 32.64 39.9566 32.64C36.9699 32.64 34.4366 31.6 32.3566 29.52C30.3032 27.44 29.2766 24.92 29.2766 21.96C29.2766 19.6933 29.9166 17.6533 31.1966 15.84C32.4766 14 34.1832 12.6933 36.3166 11.92C37.5699 11.4667 38.7966 11.24 39.9966 11.24C42.2632 11.24 44.3032 11.8933 46.1166 13.2C47.9566 14.48 49.2632 16.1867 50.0366 18.32L54.9966 32ZM45.2766 21.96C45.2766 20.0933 44.5166 18.64 42.9966 17.6C42.1166 16.9867 41.1032 16.68 39.9566 16.68C38.0899 16.68 36.6499 17.4267 35.6366 18.92C34.9966 19.8533 34.6766 20.8667 34.6766 21.96C34.6766 23.8 35.4366 25.24 36.9566 26.28C37.8899 26.92 38.8899 27.24 39.9566 27.24C41.4232 27.24 42.6766 26.7333 43.7166 25.72C44.7566 24.68 45.2766 23.4267 45.2766 21.96Z"
                fill="#FFC93E"
              />
            </svg>
          </a>
        </div>
        <nav className={`grow  md:flex ${menuShow ? "is-open" : "hidden"}`}>
          <ul className="flex flex-col w-full h-full md:flex-row justify-center gap-10">
            <li>
              <a href="#" className="text-lg font-normal">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-normal">
                What We do
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-normal">
                Our work
              </a>
            </li>
            <li>
              <a href="#" className="text-lg font-normal">
                Blog
              </a>
            </li>
            <li>
              {" "}
              <a href="#" className="text-lg font-normal">
                Say Hi
              </a>
            </li>
            <li>
              <a
                className="md:hidden btn-close cursor-pointer"
                onClick={handleMenuShow}
              >
                Close
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex-none md:hidden" onClick={handleMenuShow}>
          <a href="#">
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 13H18.25M1.75 1H18.25H1.75ZM1.75 7H18.25H1.75Z"
                stroke="white"
                strokeWidth="1.875"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
