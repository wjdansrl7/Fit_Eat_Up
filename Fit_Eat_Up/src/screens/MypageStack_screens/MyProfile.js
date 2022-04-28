import React, { useContext} from 'react';
import { ThemeContext } from 'styled-components/native';
import { StyleSheet, Text, Button, View } from 'react-native';
import { logout } from '../../utils/firebase'   //firebase.js에서 구현한 logout 함수 import
import { UserContext } from '../../contexts';
import { Image } from '../../components';

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
        <View style={styles.container}>
            <View style={styles.contents}>
                <Text style={{ fontSize: 30 }}>MyProfile</Text>
                <Image />
            <Button 
             title="Profile Edit" 
             onPress={() => navigation.navigate("ProfileEdit")} 
            />
            <View style={styles.contents}>
            <Text tytle={{ fontSize:20}}>좋아요 누른 장소</Text>
            </View>
            <View style={styles.contents}>
            <Text tytle={{ fontSize:20}}>가본장소</Text>
            </View>
            <View style={styles.contents}>
            <Button
             title="Logout" onPress={_handleLogoutButtonPress}
            />
            </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    contents: {
        flex: 1,
        height: 150,
        padding: 10,
    },
});

export default MyProfile;