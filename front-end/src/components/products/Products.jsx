import styled from "styled-components";
import { popularProducts } from "../../model/dummyData";
import { Product } from "./Product";

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </Container>
  );
};
