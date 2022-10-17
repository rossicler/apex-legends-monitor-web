import CharBanner from "../components/CharBanner";
import DivBox from "../components/divBox";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";

function Store() {
  return( 
    <>
      <Navbar/>
      <Wrapper>
        <DivBox>
          <PageTitle title="Store Rotation"></PageTitle>
        </DivBox>
        <CharBanner/>
      </Wrapper>
    </>
)}

export default Store
