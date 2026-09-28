import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </HelmetProvider>
);
