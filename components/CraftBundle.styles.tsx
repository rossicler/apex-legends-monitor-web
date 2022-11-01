import styled from "styled-components";

interface Props {
  borderColor: string;
  img: string;
}

export const Container = styled.div<Props>`
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  border: solid;
  border-width: 5px;
  border-color: ${props => props.borderColor};
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 70px;
  background-position: center;
  margin-left: 10px;

`