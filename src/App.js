import "./App.css";
import Header from "./Component/HeaderComponent/Header";
import Body from "./Component/BodyComponent/Body";
import About from "./Component/AboutUsComponent";
import Contact from "./Component/ContactComponent";
import ErrorComponent from "./Component/ErrorComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestMenuComponent from "./Component/ResturantMenu/RestMenuComponent";

function App() {
  const currentRoute = window.location.pathname;
  const routes = ['/', '/about', '/contact', '/resMenu/'];
  const isCurrentRouteStartsWith = routes.some(route => currentRoute.startsWith(route));
  return (
    <Router>
    <div className="App">
      {isCurrentRouteStartsWith &&
      <Header />}
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/resMenu/:resId' element={<RestMenuComponent/>}/>
        <Route path="/*" element={<ErrorComponent/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
