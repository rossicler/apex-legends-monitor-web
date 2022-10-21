import React from "react";
import { Container, Logo, Title, Subtitle } from "./MainBanner.styles";


const MainBanner = () => {
  return(
    <Container>
      <Logo/>
      <div>
        <Title>Welcome to Apex Legends Monitor</Title>
        <Subtitle>Know everything what's going on with Apex Legends without opening the Game</Subtitle>
      </div>
    </Container>
  )
}

export default MainBanner;