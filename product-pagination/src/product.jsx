import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  // useEffect(() => {
  //   getProductList(page);
  // }, [page]);

  const getProductList = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products/" + id);

      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  getProductList();
  return (
    <div style={{ textAlign: "center" }}>
      <div className="img-wrapper">
        <img src={product.thumbnail} alt="product" />
      </div>
      <b>{product.title}</b>
      &nbsp; ${product.price} <br />
      <div className="details">{product.description}</div>
      <br />
      <br />
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
