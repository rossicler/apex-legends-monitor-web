import CharBanner from "../components/CharBanner";
import DivBox from "../components/divBox";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { useEffect } from "react";

const API_KEY = "47aca678a38ce417df5a2be5f2fc98a6";

function Crafting() {
  useEffect(() => {
    const craftRotationUrl = `https://api.mozambiquehe.re/crafting?auth=${API_KEY}`;
    axios.get(craftRotationUrl).then((res) => {
      console.log(res);
    });
  }, []);
  return( 
    <>
      <Navbar/>
      <Wrapper>
        <DivBox>
          <PageTitle title="Crafting Rotation"></PageTitle>
          <h1>testeteste</h1>
        </DivBox>
        <CharBanner charUrl="/assets/rampart.png"/>
      </Wrapper>
    </>
)}

export default Crafting
