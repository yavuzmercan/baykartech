import styles from "../styles/About.module.scss";
export default function Header() {
  return (
    <div className="flex w-full justify-center">
      <div
        className={`flex flex-col md:flex-row justify-between items-center md:w-[1440px] ${styles.about}`}
      >
        <div className="flex flex-col mb-8 w-full md:pr-11">
          <h2>We Are A Creative Digital Agency</h2>
          <p>
            Dalio started with a vision for building an agency to solve the
            business problems of the future, and that requires a different
            model. We’re not a branding agency that dabbles in tech, and we’re
            not a development shop that leaves you hanging when it’s time to go
            to market.
          </p>
          <p>
            We start with human experience and layer in technology and marketing
            to deliver truly integrated digital solutions. This unique set of
            capabilities sets us apart from other agencies and positions DIG to
            help you attack your goals.
          </p>
          <a
            href="#"
            className="flex flex-row relative items-center rounded-full self-start bg-dalio_yellow hover:bg-yellow-600 text-dalio_blue px-5 py-2 font-semibold text-lg"
          >
            <span>Contact Us</span>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              className="fill-current text-dalio_blue ml-2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 1.125C15 0.95924 14.9341 0.800269 14.8169 0.683058C14.6997 0.565848 14.5408 0.5 14.375 0.5H6.875C6.70924 0.5 6.55026 0.565848 6.43305 0.683058C6.31584 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31584 1.44973 6.43305 1.56694C6.55026 1.68415 6.70924 1.75 6.875 1.75H12.8662L0.182496 14.4325C0.124386 14.4906 0.0782908 14.5596 0.046842 14.6355C0.0153931 14.7114 -0.000793457 14.7928 -0.000793457 14.875C-0.000793457 14.9572 0.0153931 15.0386 0.046842 15.1145C0.0782908 15.1904 0.124386 15.2594 0.182496 15.3175C0.240606 15.3756 0.309592 15.4217 0.385517 15.4532C0.461441 15.4846 0.542816 15.5008 0.624996 15.5008C0.707176 15.5008 0.788551 15.4846 0.864475 15.4532C0.9404 15.4217 1.00939 15.3756 1.0675 15.3175L13.75 2.63375V8.625C13.75 8.79076 13.8158 8.94973 13.9331 9.06694C14.0503 9.18415 14.2092 9.25 14.375 9.25C14.5408 9.25 14.6997 9.18415 14.8169 9.06694C14.9341 8.94973 15 8.79076 15 8.625V1.125Z"
                fill="#0A142F"
              />
            </svg>
          </a>
        </div>

        <div className="flex flex-col w-full ">
          <img src="/about_image.png" />
        </div>
      </div>
    </div>
  );
}
