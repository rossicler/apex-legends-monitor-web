import React from "react";

// components
import { Container, Banner, Char } from "./CharBanner.styles";

type Props = {
  charUrl: string;
}

const CharBanner = ({ charUrl }: Props) => {
  return (
    <Container>
      <Banner/>
      <Char charUrl={charUrl}/>
    </Container>
  );
};

export default CharBanner;