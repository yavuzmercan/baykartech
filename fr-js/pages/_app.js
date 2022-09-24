import "../styles/globals.css";

import { store } from "../stores";
import { Provider } from "react-redux";
import Header from "./components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container mx-auto">
      <Header />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
