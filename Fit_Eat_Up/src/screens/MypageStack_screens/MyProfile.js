import React, { useContext} from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { Text, Button } from 'react-native';
import { logout } from '../../utils/firebase'   //firebase.js에서 구현한 logout 함수 import
import { UserContext } from '../../contexts';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const MyProfile = ({ navigation }) => {
    const { dispatch } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    const _handleLogoutButtonPress = async () => {
        try {
            await logout();
        } catch (e) {
        } finally {
            dispatch({});
        }
    };
    return (
        <Container>
            <Text style={{ fontSize: 30 }}>MyProfile</Text>
            <Text tytle={{ fontSize:20}}>좋아요 누른 장소</Text>
            <Text tytle={{ fontSize:20}}>가본장소</Text>
            <Button title="Profile Edit" onPress={() => navigation.navigate("ProfileEdit")} />
            <Button
             title="Logout" onPress={_handleLogoutButtonPress}
            />
        </Container>
    )
};

export default MyProfile;