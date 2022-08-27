import logo from "./logo.svg";
import "./App.css";
import Banner from "./Components/Banner.js";
import Root from "./Root.js";
import Title from "./Components/Title.js";
import Products from "./Components/Products.js";
import Footer from "./Components/Footer.js";
function App() {
  return (
    <>
      <Root>
        <Banner />
        <Title />
        <Products />
      </Root>
      <Footer />
    </>
  );
}

export default App;
