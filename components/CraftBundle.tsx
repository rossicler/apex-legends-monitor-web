import React from "react";
import { Container } from "./CraftBundle.styles";

type Props = {
  data: {
    itemType: {
      rarityHex: string;
      asset: string;
    }
  },
}

const CraftBundle = ({data}: Props) => {
  return(
    <Container borderColor={data.itemType.rarityHex} img={data.itemType.asset}/>
  );
}

export default CraftBundle;