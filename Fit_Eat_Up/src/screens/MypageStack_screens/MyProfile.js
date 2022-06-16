import React, { useContext} from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { StyleSheet, Text, Button, View, SafeAreaView  } from 'react-native';
import { logout } from '../../utils/firebase'   //firebase.js에서 구현한 logout 함수 import
import { UserContext } from '../../contexts';
import { Image, SmallImage } from '../../components';


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
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contents: {
        width: '100%',
        height: 170,
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