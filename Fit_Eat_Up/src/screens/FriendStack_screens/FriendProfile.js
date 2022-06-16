import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet, View } from 'react-native';
import { Image } from '../../components';
import styledComponentsNative from 'styled-components/native';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Profileimage = styled.View`
    margin: 30px;
`;

const FriendProfile = () => {
    return (
        <Container> 
            <Profileimage>
                <Image />
            </Profileimage>
            <Text style={{ fontSize: 20 }}>Friend Nickname</Text>
            {/* <View style={styles.freindarea}>
                <Text style={{fontSize:20}}>hello</Text>
            </View> */}
        </Container>
    );
};

// const styles = StyleSheet.create({
//     freindarea: {
//         flex: 1,
//         backgroundColor: 'red',
//     },
// });
export default FriendProfile;