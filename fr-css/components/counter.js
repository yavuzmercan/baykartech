import styles from "../styles/Counter.module.scss";
import CounterItem from "./counteritem";

export default function Counter() {
  return (
    <div className={`flex flex-row justify-center w-full ${styles.counter}`}>
      <div className="flex flex-col md:flex-row items-center w-full max-w-[1440px] justify-between">
        <CounterItem value="4.8k" text="Job Completed" />
        <CounterItem value="12+" text="Industry Experience" />
        <CounterItem value="2.5k+" text="World wide clients" />
        <CounterItem value="120+" text="Won Awards" />
      </div>
    </div>
  );
}
