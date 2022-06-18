import React, { useContext} from 'react';
import styled, { ThemeContext } from 'styled-components/native';
import { StyleSheet, Text, Button, View, SafeAreaView  } from 'react-native';
import { logout } from '../../utils/firebase'   //firebase.js에서 구현한 logout 함수 import
import { UserContext } from '../../contexts';
import { Image, SmallImage } from '../../components';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MyProfile = ({ navigation }) => {
    const { dispatch } = useContext(UserContext);
    const theme = useContext(ThemeContext);

    //로그아웃 기능
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
            <View style={styles.myprofile}>
                <Text style={styles.image}></Text>
                <Text style={{fontSize: 20, marginHorizontal: 20}}>나의 ID</Text>
            </View>
            <View style={{height: 10}}/>
            <View style={styles.freindarea}>
                <TouchableOpacity onPress={() => navigation.navigate("GoodList")}>
                    <Text style={{fontSize:20}}> 좋아요 한 장소</Text>
                </TouchableOpacity>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>
            <View style={styles.freindarea}>
                <TouchableOpacity onPress={() => navigation.navigate("VisitList")}>
                    <Text style={{fontSize:20}}> 가본 장소</Text>
                </TouchableOpacity>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>

            <View style={styles.btnArea}>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("ProfileEdit")}>
                    <Text style={{fontSize: 20}}>프로필수정</Text>
                </TouchableOpacity >
                <View style={{width: 120}}/>
                <TouchableOpacity style={styles.btn} onPress={_handleLogoutButtonPress}>
                    <Text style={{fontSize: 20}}>로그아웃</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    myprofile: {
        width: '100%',
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        backgroundColor: '#d5d5d5',
        borderRadius: 50,
        margin: 10,
    },
    freindarea: {
        height: 160,
        width: '95%',
        margin: 5,
    },
    foodArea: {
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    foodImage: {
        height: 85,
        width: 85,
        backgroundColor: '#808080',
        borderRadius: 10,
        margin: 15,
    },
    btnArea: {
        height: 65,
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: 'white',
        borderColor: '#0066cc',
        height: 50,
        width: 110,
        borderWidth: 4,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
});

export default MyProfile;











               {/* <View style={styles.contents}>
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
                </View> */}

{/* 
                <View style={styles.contents}>
                <Button 
                 title="Profile Edit" 
                 onPress={() => navigation.navigate("ProfileEdit")} 
                />
                <Button
                 title="Logout" onPress={_handleLogoutButtonPress}
                />
                </View> */}