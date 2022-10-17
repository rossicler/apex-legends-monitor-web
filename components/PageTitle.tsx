import React from "react";

// components
import { Container, Title, LogoImg } from "./PageTitle.styles";

type Props ={
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <Container>
      <LogoImg/>
      <Title>{title}</Title>
    </Container>
  );
};

export default PageTitle;