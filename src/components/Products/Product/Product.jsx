import "./Product.scss";
import prod from "../../../../public/assets/products/earbuds-prod-1.webp"

export default function Product () {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod} />
            </div>
            <div className="prod-details">
                <span className="name">Tên sản phẩm</span>
                <span className="price">300.000 VND</span>
            </div>
        </div>
    );
}