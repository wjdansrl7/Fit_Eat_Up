import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Image } from '../../components';


const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const MyFriend = ({ navigation }) => {
    return (
        <Container>
            <View style={styles.content}>
            <Text style={{ fontSize: 30 }}>MyFriend</Text>
            <Button 
             title="AddFreind" 
             onPress={() => navigation.navigate("AddFriend")} 
            />
            </View>
            <View style={styles.content}>
            <Image />
            <Button 
             title="FriendProfile" 
             onPress={() => navigation.navigate("FriendProfile")} 
            />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    content: {
        height: 200,
        padding: 10,
    },
});

export default MyFriend;