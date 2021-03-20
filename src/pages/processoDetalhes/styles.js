import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#ccc;
`;

export const ContainerScrollView = styled.ScrollView.attrs({
    showsVerticalScrollIndicator:false
})`
    background-color:#fff;
    margin: 5px;
    border-radius:5px;
`; 