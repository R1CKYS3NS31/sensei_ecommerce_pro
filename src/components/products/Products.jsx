import { popularProducts } from "../../model/dummyData";
import { Product } from "./Product";

const Container = styled.div``;

export const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} />
      ))}
    </Container>
  );
};
