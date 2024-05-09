const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <h3>Description</h3>
            <p>{description}</p>
            <p>Rating: {rating}</p>
        </div>
    )
}

export default LargeProductListItem;