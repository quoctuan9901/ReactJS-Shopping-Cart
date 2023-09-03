import "./Category.scss";
import cat1 from "../../../../public/assets/category/cat-1.jpg"
import cat2 from "../../../../public/assets/category/cat-2.jpg"
import cat3 from "../../../../public/assets/category/cat-3.jpg"
import cat4 from "../../../../public/assets/category/cat-4.jpg"

export default function Category () {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={cat1} />
                </div>
                <div className="category">
                    <img src={cat2} />
                </div>
                <div className="category">
                    <img src={cat3} />
                </div>
                <div className="category">
                    <img src={cat4} />
                </div>
            </div>
        </div>
    );
}