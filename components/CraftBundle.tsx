import React from "react";
import { Container } from "./CraftBundle.styles";

type Props = {
  data: {
    itemType: {
      name: string;
      rarityHex: string;
      asset: string;
    }
    item: string;
  },
}

const CraftBundle = ({data}: Props) => {
  let img = ""
  if(data.itemType.name != 'ammo')
    img = data.itemType.asset
  if(data.item == 'bullet')
    img = '/assets/lightammo.jpg'
  if(data.item == 'shotgun')
    img = '/assets/shotgunammo.jpg'
  if(data.item == 'special')
    img = '/assets/energyammo.jpg'
  if(data.item == 'highcal')
    img = '/assets/heavyammo.jpg'
  if(data.item == 'sniper')
    img = '/assets/sniperammo.jpg'
  if(data.item == 'arrows')
    img = '/assets/arrowammo.png'
  return(
    <Container borderColor={data.itemType.rarityHex} img={img}/>
  );
}

export default CraftBundle;