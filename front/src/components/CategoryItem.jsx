import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyle = styled(Link)`
  color: black;
  text-decoration: none;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition-duration: 500ms;
  transform: translateY(0);
  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  object-fit: cover;
`;

const Info = styled.div`
  margin-top: 10px;
`;
const Title = styled.h1`
  font-size: 15px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <LinkStyle to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </LinkStyle>
    </Container>
  );
};

export default CategoryItem;
