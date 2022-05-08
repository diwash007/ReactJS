import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [page, setPage] = useState(0);
  useEffect(() => {
    getProductList(page);
  }, [page]);

  // window.onscroll = function (ev) {
  //   if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  //     setPage(page + 1);
  //   }
  // };

  const getProductList = async (page) => {
    const skip = page * 10;
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=10&skip=" + skip
      );

      // initial approach to cache and show data
      // setProductList(productList.concat(response.data.products));
      // productList.slice(page * 10, (page + 1) * 10).map((item)

      setProductList(response.data.products);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Product List</h1>
      <input
        type="button"
        value="prev"
        onClick={() => setPage(page > 0 && page - 1)}
      />
      <input
        type="button"
        value="next"
        onClick={() => setPage(page < 9 && page + 1)}
      />
      <br />
      <br />
      {Array.from(Array(10).keys()).map((page) => {
        return (
          <span key={page}>
            <input
              type="button"
              value={page + 1}
              onClick={() => setPage(page)}
            />
            &nbsp;
          </span>
        );
      })}
      <br />
      <br />
      {spinner
        ? "loading..."
        : productList.map((item) => {
            return (
              <a key={item.id} href="/">
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
          })}
    </div>
  );
}
