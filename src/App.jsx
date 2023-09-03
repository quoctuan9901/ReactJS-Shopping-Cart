import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import Category from "./components/Category/Category.jsx";
// import SingleProduct from "./components/SingleProduct/SingleProduct";
// import Cart from "./components/Cart/Cart";
// import Search from "./components/Header/Search/Search";

export default function App() {
    return (
        <>
            <Header />
            <Home />
            <Newsletter />
            <Footer />
        </>
    )
}