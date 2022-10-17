import React from "react";

import { Box } from "./divBox.styles";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const DivBox = ({ children }: Props) => {
  return(
    <Box>
      {children}
    </Box>
  )
}

export default DivBox;