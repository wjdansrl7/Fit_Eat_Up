import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, Button, View } from 'react-native';
import { OXButton, SmallImage } from '../../components';

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const MyFriend = ({ navigation }) => {
    return (
        <Container>
            <View style={styles.listname}>
                <Text style={styles.title}>친구추가</Text>
            </View>
            <View style={styles.addfriend}>
                <OXButton title="AddFreind" onPress={() => navigation.navigate("AddFriend")} />
            </View>
            <View style={styles.listname}>
                <Text style={styles.title}>친구목록</Text>
            </View>
            <View style={styles.friendlist}>
                <SmallImage /><SmallImage /><SmallImage />
            </View>
            <Button title="FriendProfile" onPress={() => navigation.navigate("FriendProfile")} />
        </Container>
    );
};

const styles = StyleSheet.create({
    listname: {
        width: '100%',
        height: 50,
        backgroundColor: "#CCE5FF"
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        margin: 10
    },
    addfriend: {
        width: 380,
        height: 80,
        backgroundColor: "#FFCC99",
        margin: 10,
    },
    friendlist: {
        width: 380,
        height: 300,
        backgroundColor: "#FFCC99",
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});

export default MyFriend;