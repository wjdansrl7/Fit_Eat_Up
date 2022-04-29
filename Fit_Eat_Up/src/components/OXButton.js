//Home.js의 OX 버튼
import propTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
    background-color: #3399FF;
    width:125px;
    height:40px;
    border:2px #0066CC;
    align-items: center;
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    color: white;
`;

const OXButton = ({ title, onPress }) => {
    return(
        <Container onPress={onPress} >
            <Title>{title}</Title>
        </Container>
    );
};

OXButton.propTypes = {
    title: propTypes.string,
    onPress: propTypes.func.isRequired,
}
export default OXButton;