const SmallProductListItem = ({ product }) => {
    const { name, price } = product;

    return (
        <div>
            <h3>{name}</h3>
            <p>Price: {price}</p>
        </div>
    )
}

export default SmallProductListItem;