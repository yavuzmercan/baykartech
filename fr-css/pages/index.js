import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import styles from "../styles/Home.module.scss";
import HomeShapes from "../components/homeshapes";
import Counter from "../components/counter";
import OurSolution from "../components/oursolution";

export default function Home() {
  return (
    <div
      className={`flex flex-col relative h-full bg-dalio_blue antialiased ${styles.home}`}
    >
      <HomeShapes />
      <Header />
      <Hero />
      <About />
      <Counter />
      <OurSolution />
    </div>
  );
}
