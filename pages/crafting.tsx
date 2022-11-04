import CharBanner from "../components/CharBanner";
import DivBox from "../components/divBox";
import Navbar from "../components/Navbar";
import PageTitle from "../components/PageTitle";
import Wrapper from "../components/Wrapper";
import CraftBundleRow from "../components/CraftBundleRow";
import CraftBundle from "../components/CraftBundle";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";


const API_KEY = "47aca678a38ce417df5a2be5f2fc98a6";
const craftRotationUrl = `https://api.mozambiquehe.re/crafting?auth=${API_KEY}`;

function Crafting() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const { data } = await axios.get(craftRotationUrl)
    setData(data)
  }
  
  useEffect(() => {
    fetchData()
  }, []);

  let daily = useMemo(() => {
    if (data.length == 0) {
      return []
    }
    return data.filter(el => el["bundleType"] == "daily")
  }, [data])

  let weekly = useMemo(() => {
    if (data.length == 0) {
      return []
    }
    return data.filter(el => el["bundleType"] == "weekly")
  }, [data])

  let permanent = useMemo(() => {
    if (data.length == 0) {
      return []
    }
    return data.filter(el => el["bundleType"] == "permanent")
  }, [data])

  const bundle_types = [
    {
      bundleType: "Daily",
      objs: daily,
    },
    {
      bundleType: "Weekly",
      objs: weekly,
    },
    {
      bundleType: "Permanent",
      objs: permanent ,
    },
  ]

  return( 
    <>
      <Navbar/>
      <Wrapper>
        <DivBox>
          <PageTitle title="Crafting Rotation"></PageTitle>
          <div>
            {bundle_types.map((item, index) => 
              <CraftBundleRow title={item.bundleType} data={item} key={index}/>
            )}
          </div>
        </DivBox>
        <CharBanner charUrl="/assets/rampart.png"/>
      </Wrapper>
    </>
)}

export default Crafting
