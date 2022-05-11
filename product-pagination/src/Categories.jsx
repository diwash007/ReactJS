import { NavLink } from "react-router-dom";

const Categories = () => {
  const pages = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ];
  return pages.map((page) => (
    <NavLink to={"/category/" + page.replace(" ", "_")} key={page}>
      {page}
      <br />
    </NavLink>
  ));
};

export default Categories;
