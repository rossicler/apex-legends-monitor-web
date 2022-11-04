import CharBanner from "../components/CharBanner";
import DivBox from "../components/divBox";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { useEffect } from "react";

const API_KEY = "47aca678a38ce417df5a2be5f2fc98a6";


function Store() {
  return( 
    <>
      <Navbar/>
      <Wrapper>
        <DivBox>
          <PageTitle title="Store Rotation"></PageTitle>
        </DivBox>
        <CharBanner charUrl="/assets/Loba2.png"/>
      </Wrapper>
    </>
)}

export default Store
