import React from "react";

import { Box } from "./Wrapper.styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Wrapper = ({ children }: Props) => {
  return (
  <Box>
    {children}
  </Box>
  )
}

export default Wrapper;