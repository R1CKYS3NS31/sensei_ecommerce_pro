import { Send } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

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
