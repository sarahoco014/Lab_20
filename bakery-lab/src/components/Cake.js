const Cake = ({cake, handleTotalSaleValue}) => {

    return (
        <>
            <h3>{cake.name}</h3>
            <p>Ingredients: {cake.ingredients.join(", ")}</p>
            <p>Price: {cake.price}</p>
            <p>Rating: {cake.rating}</p>
            <button onClick={() => handleTotalSaleValue(cake.price)}>Click to buy a cake!</button>
        </>
    )
}

export default Cake;
