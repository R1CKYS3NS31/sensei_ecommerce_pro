import styled from "styled-components";
import { categories } from "../../model/dummyData";
import { mobile } from "../../responsive";
import { Category } from "./Category";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px",flexDirection:'column' })}
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
