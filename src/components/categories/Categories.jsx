import styled from "styled-components";
import { categories } from "../../model/dummyData";
import { Category } from "./Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item,i) => (
        <Category key={i} item={item} />
      ))}
    </Container>
  );
};
