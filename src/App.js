import "./_layout/css/styles.css"; 
import FooterNav from "./_layout/FooterNav";
import HeaderNav from "./_layout/HeaderNav";
import Hero from "./hero/Hero";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import Content from "./_layout/Content";
import Contact from "./contact/Contact";
import Cookies from "./cookies/Cookies";
import Privacy from "./privacy/Privacy";
import NewRecipe from "./newrecipe/NewRecipe";
import Page404 from "./error/Page404";

function App() { 
  return (<>
    <HeaderNav />
      <Content>
        <Routes>
          <Route path="/">
            <Route index element={<Hero /> }/> 
            <Route path="impressum" element={<Contact />} /> 
            <Route path="cookies" element={<Cookies />} /> 
            <Route path="datenschutz" index element={<Privacy />} /> 
            <Route path="neuesRezept" index element={<NewRecipe />} /> 
            <Route path="*" index element={<Page404 />} /> 
          </Route>
        </Routes>
      </Content>
    <FooterNav />
  </>);
}

export default App;
