import styled from "styled-components";
import { categories } from "../model/dummyData";
import { Category } from "./Category";

const Container = styled.div``;

export const Categories = () => {
  return <Categories>{categories.map(item=>(
    <Category item={item}/>
  ))}</Categories>;
};
