


function ProductCard({
    productTitle,
    productMetaTitle,
    productPrice,
    colors = ['green', 'yellow', 'pink']
}) {

    return (
        <div className="col-md-3">
            <div className="product-card">
                <div className="save-tag">SAVE 3%</div>
                <img src="https://cocosmilecups.com/cdn/shop/products/Sqeaky.4_400x.png?v=1718022207"
                    alt="Coco Puppet Fairy Cup" />
                <div className="product-title"><b className="d-block mb-2">{productTitle}</b>{productMetaTitle}</div>
                <div className="price">{productPrice}</div>
                {/* <div className="reviews">
                        <div className="stars">☆☆☆☆☆</div>
                        <div className="no-reviews">No reviews</div>
                    </div> */}
                <div className="color-options">
                    {colors.map(color => (
                        <span className={color}></span>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default ProductCard;