import "./_layout/css/styles.css"; 

import { Navigate, Route, Routes } from "../node_modules/react-router-dom/dist/index";
import CookieHandler from 'universal-cookie';

import FooterNav from "./_layout/FooterNav";
import HeaderNav from "./_layout/HeaderNav";
import Hero from "./hero/Hero";
import Content from "./_layout/Content";
import Contact from "./contact/Contact";
import Cookies from "./cookies/Cookies";
import Privacy from "./privacy/Privacy";
import NewRecipe from "./newrecipe/NewRecipe";
import Page404 from "./error/Page404";
import Filter from "./filter/Filter";

const cookies = new CookieHandler(); 
const userToken = cookies.get("token"); 

export default function App() { 
  console.log("APP Aufruf"); 
  return (
    <>
      { console.log("APP: Vor HeaderNav") }
      <HeaderNav />
      <Content>
        <Routes>
          <Route path="/">
            <Route index element={<Hero />} />
            <Route path="impressum" element={<Contact />} /> 
            <Route path="cookies" element={<Cookies />} /> 
            <Route path="datenschutz" index element={<Privacy />} /> 
            <Route path="neuesRezept" index element={<NewRecipe />} /> 
            <Route path="filter" index element={<Filter />} /> 
            <Route path="*" index element={<Page404 />} /> 
          </Route>
        </Routes>
        {!userToken && <Navigate to="/cookies" />}
      </Content>
      <FooterNav />
      {console.log("APP: Nach FooterNav")}
    </>
  );
}
