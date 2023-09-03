import "./Products.scss";
import Product from "./Product/Product";

export default function Products () {
    return (
        <div className="products-container">
            <div className="sec-heading">Heading</div>
            <div className='products'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}