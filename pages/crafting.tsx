import CharBanner from "../components/CharBanner";
import DivBox from "../components/divBox";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import CraftBundle from "../components/CraftBundle";
import axios from "axios";
import { useEffect } from "react";


const API_KEY = "47aca678a38ce417df5a2be5f2fc98a6";
const craftRotationUrl = `https://api.mozambiquehe.re/crafting?auth=${API_KEY}`;

let data: any[] = [{}];

function Crafting() {
  useEffect(() => {
    axios.get(craftRotationUrl).then((res) => {
      data = res.data;
      console.log(data)
    });
  }, []);
  return( 
    <>
      <Navbar/>
      <Wrapper>
        <DivBox>
          <PageTitle title="Crafting Rotation"></PageTitle>
          <>
          {data.map(item => (
            <CraftBundle key={data}/>
          ))}
          </>
        </DivBox>
        <CharBanner charUrl="/assets/rampart.png"/>
      </Wrapper>
    </>
)}

export default Crafting
