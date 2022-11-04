import styled from "styled-components";
export const TitleContainer = styled.div`
    padding-left: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
        color: ${props => props.theme.secondaryColor};
    }
`

export const Title = styled.h2`
    color: ${props => props.theme.secondaryDarkColor};
    padding-right: 20px;
`
export const Container = styled.div`
    padding-left: 100px;
    display: flex;
    flex-direction: row;
`