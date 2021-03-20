import React,{useState,useEffect} from 'react';

import  {
    Container,
    Title,
    SlideScroll

} from './style';
import Card from '../Card';
import {api} from '../../services/api';

const SlideCard = ()=> {
    const [processo,setProcesso]=useState([]);
    
    const fetchProcesso = async ()=>{
        const response = await api.get('/getprocesso'); 
        setProcesso(response.data);
    }

    useEffect(()=>{
        fetchProcesso()
    },[]);

    return (
        <Container>
            <Title>Galeria</Title>
            <SlideScroll>
                {processo.map((res,index)=>(
                    <Card dados={res} key={index} cont={index+1}/>
                ))}
            </SlideScroll>
        </Container>
    );
}

export default SlideCard;