import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Button = styled.button``;
const Input = styled.input``;

export const Newsletter = () => {
  return (
    <Container>
      <Title>News letter</Title>
      <Description>Get timely updates from your favourite products</Description>
      <InputContainer>
        <Input placeholder="your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};
