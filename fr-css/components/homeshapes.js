import styles from "../styles/Home.module.scss";
export default function HomeShapes() {
  return (
    <>
      <img
        src="/hero_top_left_image.png"
        className={`absolute ${styles.sol1}`}
      />
      <img
        src="/hero_top_left_image-2.png"
        className={`absolute ${styles.sol2}`}
      />
      <svg
        width="52"
        height="49"
        viewBox="0 0 52 49"
        className={`fill-current text-white absolute ${styles.star1}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 0L29.4914 22.1944L51.6785 18.6565L31.6493 28.8356L41.8702 48.8435L26 32.94L10.1298 48.8435L20.3507 28.8356L0.321474 18.6565L22.5086 22.1944L26 0Z"
          fill="white"
        />
      </svg>

      <svg
        width="52"
        height="49"
        viewBox="0 0 52 49"
        className={`fill-current text-white absolute ${styles.star2}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 0L29.4914 22.1944L51.6785 18.6565L31.6493 28.8356L41.8702 48.8435L26 32.94L10.1298 48.8435L20.3507 28.8356L0.321474 18.6565L22.5086 22.1944L26 0Z"
          fill="white"
        />
      </svg>

      <svg
        width="52"
        height="49"
        viewBox="0 0 52 49"
        className={`fill-current text-white absolute ${styles.star3}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26 0L29.4914 22.1944L51.6785 18.6565L31.6493 28.8356L41.8702 48.8435L26 32.94L10.1298 48.8435L20.3507 28.8356L0.321474 18.6565L22.5086 22.1944L26 0Z"
          fill="white"
        />
      </svg>

      <div className={styles.leftCircle}></div>
      <div className={styles.rightCircle}></div>
    </>
  );
}
