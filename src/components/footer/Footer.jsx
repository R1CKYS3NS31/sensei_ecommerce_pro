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
const Logo = styled.div``;
const Desc = styled.div``;

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
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};
