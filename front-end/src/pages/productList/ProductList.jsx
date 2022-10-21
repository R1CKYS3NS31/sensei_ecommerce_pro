import styled from "styled-components";
import { NavBar } from "../../components/navBar/NavBar";
import { Announcement } from "../../components/announcement/Announcement";
import { Products } from "../../components/products/Products";
import { Newsletter } from "../../components/newsletter/Newsletter";
import { Footer } from "../../components/footer/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const Filtertext = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const Title = styled.h1`
  margin: 20px;
`;

export const ProductList = () => {
  const colorOptions = [
    { value: "white" },
    { value: "green" },
    { value: "yellow" },
    { value: "red" },
    { value: "blue" },
    { value: "black" },
  ];
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState({});

  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <Filtertext>Filter Products:</Filtertext>
          <Select name="color" onChange={handleFilters}>
            {colorOptions.map((color, i) => (
              <Option key={i} value={color.value}>
                {color.value}
              </Option>
            ))}
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <Filtertext>Sort Products:</Filtertext>
          <Select onChange={(e) => setSort({ sort: e.target.value })}>
            <Option value={"newest"} defaultValue>
              Newest
            </Option>
            <Option value={"esc"}>Price (asc)</Option>
            <Option value={"desc"}>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};
