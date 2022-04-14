//버튼 컴포넌트
import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';


//버튼 배경을 투명하게 하기 위한 것
const TRANSPARENT = 'transparent';

//background-color - isfilled가 true이면 배경색이 블루, false이면 배경색은 투명
//opacity -> 이메일, 비밀번호 미입력 시 버튼의 불투명도를 0.5로 설정
const Container = styled.TouchableOpacity`
    background-color: ${({ theme, isFilled }) => 
        (isFilled ? theme.buttonBackground : TRANSPARENT)};
    align-items: center;
    border-radius: 4px;
    width: 100%;
    padding: 10px;
`;

const Title = styled.Text`
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    color: ${({ theme, isFilled }) => 
    (isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle)};
`;

const Button = ({ containerStyle, title, onPress, isFilled }) => {
    return (
        <Container 
            style={containerStyle} 
            onPress={onPress} 
            isFilled={isFilled}
        >
            <Title isFilled={isFilled}>{title}</Title>
        </Container>
    );
};

//isFilled를 true로 기본값 지정
Button.defaultProps = {
    isFilled: true,
};

Button.propTypes = {
    containerStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    isFilled: PropTypes.bool,
}
export default Button;