import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Category = () => {
  let { category } = useParams();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList(category);
  }, [category]);

  const getProductList = async (category) => {
    try {
      const response = await axios.get(
        "https://dummyjson.com/products/category/" + category
      );
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return productList.map((item) => {
    return (
      <a key={item.id} href={"../products/" + item.id}>
        <div>
          <img
            src={item.thumbnail}
            alt={item.title}
            height="100px"
            width="200px"
          />
          <div>
            Name: {item.title}
            <br />
            Price: {item.price}
          </div>
          <br />
        </div>
      </a>
    );
  });
};

export default Category;
