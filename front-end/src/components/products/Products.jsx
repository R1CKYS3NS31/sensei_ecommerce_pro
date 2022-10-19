import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../../model/dummyData";
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
        const productsJson = await res.json()
        setProducts(productsJson)
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat&&setFilteredProducts(
      products.filter(item=>)
    )
  }, [products,cat,filters])
  return (
    <Container>
      {popularProducts.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </Container>
  );
};
