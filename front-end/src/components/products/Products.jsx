import { useEffect, useState } from "react";
import styled from "styled-components";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          cat
            ? `http://0.0.0.0:9000/api/products?category=${cat}`
            : "http://0.0.0.0:9000/api/products"
        );
        const productsJson = await res.json();
        setProducts(productsJson);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [cat]);

  // filtered products
  useEffect(() => {
    cat
      ? setFilteredProducts(
          products.filter((item) =>
            Object.entries(filters).every(([key, value]) =>
              item[key].includes(value)
            )
          )
        )
      : setFilteredProducts(products);
  }, [products, cat, filters]);

  useEffect(() => {
    // ricky has not tested
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product key={item.id} item={item} />)
        : products.map((item) => <Product key={item.id} item={item} />)}
    </Container>
  );
};
