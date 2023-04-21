import { Routes, Route } from "react-router-dom";

import Main from "../pages/Main";
import NotFound from "../pages/NotFound";
import Header from "../containers/Header";
import ProductEdit from "../pages/ProductEdit";
import ProductView from "../pages/ProductView";
import { MAIN_ROUTE, PRODUCT_EDIT_ROUTE, PRODUCT_VIEW_ROUTE } from "./routes";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={MAIN_ROUTE} element={<Main />} />
        <Route path={PRODUCT_EDIT_ROUTE} element={<ProductEdit />} />
        <Route path={PRODUCT_VIEW_ROUTE} element={<ProductView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
