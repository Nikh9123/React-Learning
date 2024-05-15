import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import LogIn from "./pages/LogIn";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";

import "./index.css";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";


const BASE_URL = "http://localhost:8000/";

function App() {
  const [cities, setCities] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}cities`);
        const data = await res.json();
        setCities(data);
      }
      catch (err) {
        alert(err.message)
      }
      finally {
        setIsLoading(false)
      }
    }
    fetchCities();
  }, [])
  console.log("hey : ", cities)
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<LogIn />} />
          <Route path="app" element={<AppLayout />} >
            <Route index element={<CityList cities={cities} isLoading={isloading} />} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isloading} />} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isloading} />} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App;