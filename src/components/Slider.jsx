import styled from "@emotion/styled";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #1ef7161d;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: 0.5px solid;
  border-radius: 5px;
`;

export const Slider = () => {
  const handleClick = (direction) => {};
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="grey">
          <ImgContainer>
            <Image src="images/20210917160212_IMG_1338.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Book</Title>{" "}
            <Desc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              error aliquid, reiciendis architecto ab ullam nam earum eos, rerum
              reprehenderit dolorem aperiam velit laboriosam incidunt quod vitae
              cupiditate inventore quas.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="teal">
          <ImgContainer>
            <Image src="images/20210917160212_IMG_1338.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Mask</Title>
            <Desc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              error aliquid, reiciendis architecto ab ullam nam earum eos, rerum
              reprehenderit dolorem aperiam velit laboriosam incidunt quod vitae
              cupiditate inventore quas.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="gray">
          <ImgContainer>
            <Image src="images/20210917160212_IMG_1338.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>Bag</Title>
            <Desc>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              error aliquid, reiciendis architecto ab ullam nam earum eos, rerum
              reprehenderit dolorem aperiam velit laboriosam incidunt quod vitae
              cupiditate inventore quas.
            </Desc>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};
