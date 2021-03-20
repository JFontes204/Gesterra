import styled from 'styled-components/native';

export const Container = styled.View`
    width:160px;
    padding:15px 0px;
    margin-right:5px;
`;

export const Photo = styled.Image`
    background-color:gray;
    width:160px;
    height:150px;
    border-radius:6px;
`;

export const ContainerSubtitle = styled.View`
    flex-direction:column;
    padding:10px 0px;
    justify-content:center;
    align-items:center
`;

export const SubtitleTitle = styled.Text`
   color:#000;
   font-weight:bold;
   font-size:14px;
   padding:2px 0px;

`;

export const SubtitleDescription = styled.Text`
    color:#999;
    font-size:14px;
`;



