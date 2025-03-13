import { useState } from "react";
import { Principal } from "./Principal";
import Footer from "./Footer";

import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

import ProductDetailContainer from "./ProductDetailContainer";




const App = () => {
  const [cantidadProductos, setCantidadProductos] = useState(0);

  return (
    <>
     <Principal/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categorias/:id" element={<ItemListContainer />} />
        <Route path="/producto/:id" element={<ProductDetailContainer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

