import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { Form } from "./PlayerSearch.styles";
import axios from "axios";
import { API_KEY } from "../../constants/constants";

const PlayerSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [userStats, setUserStats] = useState({});

  const getPlayerStatistics = async (e: any) => {
    e.preventDefault();

    const res = await axios.get(
      `https://api.mozambiquehe.re/bridge?auth=${API_KEY}&player=${searchText}&platform=PC`
    );
    setUserStats(res.data);
  };

  return (
    <Form onSubmit={(e) => getPlayerStatistics(e)}>
      <SearchInput
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </Form>
  );
};

export default PlayerSearch;
