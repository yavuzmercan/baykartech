import styles from "../styles/OurSolution.module.scss";
export default function OurSolution() {
  return (
    <div
      className={`flex flex-col lg:flex-row w-full justify-center ${styles.oursolution}`}
    >
      <div
        className={`lg:w-4/12 w-max-[575px] flex grow p-7 lg:p-24 h-[386px] lg:h-[850px] order-2 lg:order-1 w-full relative  ${styles.leftside}`}
      >
        <div className="flex justify-center items-center w-full absolute left-0 -top-[96px] lg:top-[96px] ">
          <img
            src="our-solution-image.jpg"
            className="rounded-[30px] lg:rounded-[50px] max-w-none w-[320px] h-[320px] lg:w-[650px] lg:h-[650px] object-cover"
          />
        </div>
      </div>
      <div
        className={`w-full flex flex-col justify-center items-start p-7 pb-32 lg:p-32 h-auto lg:h-[850px] lg:w-8/12 order-1 lg:order-2 ${styles.rightside}`}
      >
        <h2 className="text-3xl lg:text-5xl mb-7 font-bold">
          Our Solution Approach
        </h2>
        <ul>
          <li>
            <div className="flex grow flex-col items-start justify-start">
              <h3 className="text-2xl font-bold mb-5">
                Data Analysis with problem factor
              </h3>
              <p className="mb-6 lg:mb-12">
                Delivering the spatial expertise of the largest, most
                sophisticated performance marketing agencies, while providing
                intimate, boutique-like support.
              </p>
            </div>
          </li>

          <li>
            <div className="flex grow flex-col items-start justify-start">
              <h3 className="text-2xl font-bold mb-5">
                Functionality solution for users
              </h3>
              <p className="mb-6 lg:mb-12">
                Delivering the spatial expertise of the largest, most
                sophisticated performance marketing agencies.
              </p>
            </div>
          </li>

          <li>
            <div className="flex grow flex-col items-start justify-start">
              <h3 className="text-2xl font-bold mb-5">
                Latest technology enabled
              </h3>
              <p className="mb-6 lg:mb-12">
                Technology the spatial expertise of the largest, most
                sophisticated performance marketing agencies, while providing
                intimate, boutique-like support.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
