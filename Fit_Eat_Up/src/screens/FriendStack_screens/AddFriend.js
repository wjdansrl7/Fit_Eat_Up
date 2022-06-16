import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet, View } from 'react-native';
import { Input ,Button } from '../../components';


const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    padding: 0px 20px;
`;


const AddFriend = ({ navigation }) => {
    const [FriendNickname, setFriendNickname] = useState('');
    return (
        <Container>
            <View style={styles.title}>
                <Text style={{ fontSize: 20, margin:15 }}>친구의 닉네임을 입력해주세요!</Text>
            </View>
            <View style={styles.inputArea}>
            <Input 
                label="Input Friend Nickname"
                value={FriendNickname}
                onChangeText={text => setFriendNickname(text)}
                onSubmitEditing={()=>{}}
                placeholder="Freind Nickname" 
            />
            <Button title="친구추가" onPress={() => navigation.navigate("MyFriend")} />
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
    },
    inputArea: {
        height: 150,
        margin: 10,
    },
});

export default AddFriend;