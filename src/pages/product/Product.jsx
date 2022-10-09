import styled from "styled-components";
import { Announcement } from "../../components/announcement/Announcement";
import { Footer } from "../../components/footer/Footer";
import { NavBar } from "../../components/navBar/NavBar";
import { Newsletter } from "../../components/newsletter/Newsletter";

const Container = styled.div``;

export const Product = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Newsletter />
      <Footer />
    </Container>
  );
};
