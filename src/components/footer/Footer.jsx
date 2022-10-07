import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Logo = styled.h1``;
const Desc = styled.p``;
const SocialContainer = styled.div``;
const SocialIcon = styled.div``;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Sensei E-commerce</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi ab,
          alias aliquid accusantium hic eum veniam qui nobis ex laborum
          distinctio placeat cupiditate laudantium architecto rem ullam. Quidem,
          necessitatibus molestias.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};
