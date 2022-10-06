import React from "react";
import { Input, InputContainer, SearchIcon } from "./SearchInput.styles";

interface PropsType {
  value: string;
  type?: string;
  onChange: (e: any) => void;
}

const SearchInput = (props: PropsType) => {
  return (
    <InputContainer>
      <SearchIcon />
      <Input {...props} />
    </InputContainer>
  );
};

export default SearchInput;
