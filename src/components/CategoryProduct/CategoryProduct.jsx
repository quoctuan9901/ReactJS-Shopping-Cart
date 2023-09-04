import "./CategoryProduct.scss";
import Products from "../Products/Products";

export default function CategoryProduct () {
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Thể loại sản phẩm</div>
                <Products />
            </div>
        </div>
    );
}
