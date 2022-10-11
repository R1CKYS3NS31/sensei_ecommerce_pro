import styled from "styled-components";
import { Announcement } from "../../components/announcement/Announcement";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/NavBar";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.div`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const PriceDetail = styled.div`
  flex: 1;
`;
const ProductName = styled.span``;
const ProductID = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;

export const Cart = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/images/20210917160212_IMG_1338.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>987654567
                  </ProductID>
                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b>38.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>price</PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};
