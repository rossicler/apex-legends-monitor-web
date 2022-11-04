import React from "react";
import { TitleContainer, Title, Container } from "./CraftBundleRow.styles";
import CraftBundle from "./CraftBundle";
import Countdown from 'react-countdown'

interface Props {
    title: string;
    data: {
        objs: {
            bundleContent: object,
            endDate: string
        },
    }
}

const CraftBundleRow = ({ data, title }: Props) => {
    const endDate = data.objs.map(obj => obj.endDate)
    console.log(data)
    if((title == "Daily" && endDate[0]) || (title == "Weekly" && endDate[0])){
        return(
            <>
                <TitleContainer>
                    <Title>{title}</Title>
                        <Countdown date={Date.parse(endDate[0])}/>
                </TitleContainer>      
                <Container>
                    {data.objs.map(obj =>
                        obj.bundleContent.map((item, index) =>
                            <CraftBundle data={item} key={index}/>
                        ) 
                    )}
                </Container>
            </>
        );
    }
    else {
        return(
            <>
                <TitleContainer>
                    <Title>{title}</Title>  
                </TitleContainer>      
                <Container>
                    {data.objs.map(obj =>
                        obj.bundleContent.map((item, index) =>
                            <CraftBundle data={item} key={index}/>
                        ) 
                    )}
                </Container>
            </>
        );
    }
}

export default CraftBundleRow;