import styled from 'styled-components/native';

export const Container = styled.View`
    padding:5px 20px;
`;

export const Title = styled.Text`
    color:#000;
    font-size:23px;
    font-weight:bold;
`;

export const SlideScroll = styled.ScrollView.attrs({
    showsHorizontalIndicator:false,
    horizontal:true
})``;