import "./_layout/css/styles.css"; 
import FooterNav from "./_layout/FooterNav";
import HeaderNav from "./_layout/HeaderNav";
import Hero from "./hero/Hero";
import { Route, Routes } from "../node_modules/react-router-dom/dist/index";
import Content from "./_layout/Content";

function App() {
  return (<>
    <HeaderNav />
      <Content>
        <Routes>
          <Route path="/" component={Hero} />
        </Routes>
      </Content>
    <FooterNav />
  </>);
}

export default App;
