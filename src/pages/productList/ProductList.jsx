import styled from "styled-components";
import { NavBar } from "../../components/navBar/NavBar";
import { Announcement } from "../../components/announcement/Announcement";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const Title = styled.h1`
  margin: 20px;
`;

export const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>filter</Filter>
        <Filter>filter2</Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};
