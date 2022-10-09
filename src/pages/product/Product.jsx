import styled from "styled-components";
import { Announcement } from "../../components/announcement/Announcement";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/NavBar";
import { Newsletter } from "../../components/newsletter/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div``;
const ImgContainer = styled.div``;
const Image = styled.img``;

export const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
