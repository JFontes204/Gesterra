import React from 'react';

import {
    Container,
    ContainerScrollView
} from './styles';

import SlideCard from '../SlideCard'

const Main =()=>{
return(
    <Container>
        <ContainerScrollView>
            <SlideCard />
        </ContainerScrollView>
    </Container>
);
}

export default Main;