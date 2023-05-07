import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../components/responsive";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  /* text-align: center; */
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  ${mobile({ display: "flex", flexWrap: "wrap" })}
`;

const Categories = () => {
  return (
    <Container>
      <Title>여러분의 학과를 선택해주세요</Title>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
