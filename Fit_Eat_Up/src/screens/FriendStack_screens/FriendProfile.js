import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { Image } from '../../components';

const Profileimage = styled.View`
    margin: 20px 0px 0px 0px;
`;

const FriendProfile = () => {
    return (
        <SafeAreaView style={styles.container}> 
            <Profileimage>
                <Image />
            </Profileimage>
            <Text style={{ fontSize: 20, marginBottom: 30 }}>Friend Nickname</Text>
            <View style={styles.freindarea}>
                    <Text style={{fontSize:20}}> 좋아요 한 장소</Text>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>
            <View style={styles.freindarea}>
                    <Text style={{fontSize:20}}> 가본 장소</Text>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
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
    }
});
export default FriendProfile;