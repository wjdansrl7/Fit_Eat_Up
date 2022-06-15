import React, { useContext} from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { StyleSheet, Text, Button, View } from 'react-native';
import { logout } from '../../utils/firebase'   //firebase.js에서 구현한 logout 함수 import
import { UserContext } from '../../contexts';
import { Image, SmallImage } from '../../components';

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`

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
            <View style={styles.contents}>
                <Image />
                <Button 
                 title="Profile Edit" 
                 onPress={() => navigation.navigate("ProfileEdit")} 
                />
            </View>
                <View style={styles.contents}>
                    <Text stytle={styles.title}>좋아요 누른 장소</Text>
                    <View style={styles.placelist}>
                        <SmallImage /><SmallImage /><SmallImage />
                    </View>
                </View>
                <View style={styles.contents}>
                    <Text stytle={styles.title}>가본장소</Text>
                    <View style={styles.placelist}>
                        <SmallImage /><SmallImage /><SmallImage />
                    </View>
                </View>
                <View style={styles.contents}>
                <Button
                 title="Logout" onPress={_handleLogoutButtonPress}
                />
                </View>
        </Container>
    )
};

const styles = StyleSheet.create({
    contents: {
        width: '100%',
        height: 180,
    },
    title: {
        fontSize: 30,
        margin: 10,
    },
    placelist: {
        height: 100,
        margin: 5,
        flexDirection: 'row',
    },
});

export default MyProfile;