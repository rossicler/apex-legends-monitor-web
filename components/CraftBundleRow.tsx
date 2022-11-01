import React from "react";

import { TitleContainer, CountDown, Title, Container } from "./CraftBundleRow.styles";

import CraftBundle from "./CraftBundle";

interface Props {
    title: string;
    data: {
        objs: {
            bundleContent: object
        }
    }
}

const CraftBundleRow = ({ data, title }: Props) => {
    console.log(title, data)
    return(
        <>
            <TitleContainer>
                <Title>{title}</Title>
                <CountDown/>
            </TitleContainer>      
            <Container>
                {data.objs.map(obj =>
                    obj.bundleContent.map(item =>
                        <CraftBundle data={item} key={item.itemType.name}/>
                    ) 
                )}
            </Container>
        </>
    );
}

export default CraftBundleRow;