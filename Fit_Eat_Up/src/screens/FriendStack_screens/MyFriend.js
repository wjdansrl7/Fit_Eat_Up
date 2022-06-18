import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, 
        Text, 
        View, 
        SafeAreaView,
        TouchableOpacity } from 'react-native';
import { OXButton, SmallImage } from '../../components';
import { MaterialIcons } from '@expo/vector-icons';    //돋보기 이모티콘

// const Container = styled.SafeAreaView`
//     flex: 1;
//     justify-content: center;
//     background-color: ${({ theme }) => theme.background};
//     align-items: center;
// `;

const MyFriend = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.addIcon} onPress={() => navigation.navigate("AddFriend")}>
                <MaterialIcons name="add-circle-outline" size={50} color="#0066cc" />
            </TouchableOpacity>
            <Text style={{fontSize: 20, marginHorizontal: 20, marginVertical: 10}}>친구목록</Text>
            <View style={styles.freindListArea}>
                <View style={styles.onefreindArea}>
                    <SmallImage />
                    <TouchableOpacity 
                        style={styles.freindbtn}
                        onPress={() => navigation.navigate("FriendProfile")}
                    >
                        <Text style={{fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.freindbtn}>
                        <Text style={{fontSize: 17}}>Delete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.onefreindArea}>
                    <SmallImage />
                    <TouchableOpacity 
                        style={styles.freindbtn}
                        onPress={() => navigation.navigate("FriendProfile")}
                    >
                        <Text style={{fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.freindbtn}>
                        <Text style={{fontSize: 17}}>Delete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.onefreindArea}>
                    <SmallImage />
                    <TouchableOpacity 
                        style={styles.freindbtn}
                        onPress={() => navigation.navigate("FriendProfile")}
                    >
                        <Text style={{fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.freindbtn}>
                        <Text style={{fontSize: 17}}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
            


            <View style={styles.freindListArea}>
                <View style={styles.onefreindArea}>
                    <SmallImage />
                    <TouchableOpacity 
                        style={styles.freindbtn}
                        onPress={() => navigation.navigate("FriendProfile")}
                    >
                        <Text style={{fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.freindbtn}>
                        <Text style={{fontSize: 17}}>Delete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.onefreindArea}>
                    <SmallImage />
                    <TouchableOpacity 
                        style={styles.freindbtn}
                        onPress={() => navigation.navigate("FriendProfile")}
                    >
                        <Text style={{fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.freindbtn}>
                        <Text style={{fontSize: 17}}>Delete</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.onefreindArea}>
                    <SmallImage />
                    <TouchableOpacity 
                        style={styles.freindbtn}
                        onPress={() => navigation.navigate("FriendProfile")}
                    >
                        <Text style={{fontSize: 17}}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.freindbtn}>
                        <Text style={{fontSize: 17}}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    addIcon: {
        marginHorizontal: 20,
        alignItems: 'flex-end',
    },
    freindListArea: {
        height: 200,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    onefreindArea: {
        height: 200,
        width: 110,
        marginHorizontal: 3,
    },
    freindbtn: {
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 4,
        borderColor: '#0066cc',
        borderRadius: 5,
    },

    // listname: {
    //     width: '100%',
    //     height: 50,
    //     backgroundColor: "#CCE5FF"
    // },
    // title: {
    //     fontSize: 20,
    //     fontWeight: '600',
    //     margin: 10
    // },
    // addfriend: {
    //     width: 380,
    //     height: 80,
    //     backgroundColor: "#FFCC99",
    //     margin: 10,
    // },
    // friendlist: {
    //     width: 380,
    //     height: 300,
    //     backgroundColor: "#FFCC99",
    //     margin: 10,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    // },
});

export default MyFriend;










            {/* <View style={styles.listname}>
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
            <Button title="FriendProfile" onPress={() => navigation.navigate("FriendProfile")} /> */}