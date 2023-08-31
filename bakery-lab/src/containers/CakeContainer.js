import { useState } from "react";
import Cake from "../components/Cake";

const victoriaSponge = {
	name: "Victoria Sponge",
   	ingredients: [
   		"eggs",
      	"butter",
      	"sugar",
      	"self-raising flour",
      	"baking powder",
      	"milk"
  	],
  	price: 5,
   	rating: 5
};

const teaLoaf = {
    name: "Tea Loaf",
      ingredients: [
          "eggs",
         "oil",
         "dried fruit",
         "sugar",
         "self-raising flour",
         "strong tea",
     ],
     price: 2,
     rating: 3
}

const carrotCake = {
    name: "Carrot Cake",
      ingredients: [
       "carrots",
         "walnuts",
         "oil",
         "cream cheese",
         "flour",
         "sugar",
      ],
      price: 8,
      rating: 5
} 

const CakeContainer = () => {

    const [totalSaleValue, setTotalSaleValue] = useState(0);

    const handleTotalSaleValue = (price) => {
        setTotalSaleValue(totalSaleValue + price);
    };

    return (
        <>
            <h2>Cake Recipes:</h2>
            
            <Cake
                cake={victoriaSponge}
                handleTotalSaleValue={handleTotalSaleValue}
            />
  
            <Cake 
                cake={teaLoaf}
                handleTotalSaleValue={handleTotalSaleValue}
            />

            <Cake 
                cake={carrotCake}
                handleTotalSaleValue={handleTotalSaleValue}
            />

            <p>Average Rating: {(victoriaSponge.rating + teaLoaf.rating + carrotCake.rating) / 3}</p>
            <p>Total Sale Value: {totalSaleValue}</p>
        </>
    )
}

export default CakeContainer;
