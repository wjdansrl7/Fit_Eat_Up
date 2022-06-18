import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Text, Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Input } from '../../components';
import { MaterialIcons } from '@expo/vector-icons';    //돋보기 이모티콘

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    padding: 0px 20px;
`;

// const CateSelect = styled.View`
//     background-color: #CCE5FF;
//     justify-content: center;
//     align-items: center;
//     width: 95%;
//     height: 25%;
//     border-radius: 10px;
//     margin: 15px;
// `;


const Search = ({ navigation }) => {
    const [search, setSearch] = useState('');

    return (
        <Container>
            <View style={styles.searchArea}>
                <View style={styles.inputArea}>
                <Input
                    label="장소 검색"
                    value={search}
                    onChangeText={text => setSearch(text)}
                    onSubmitEditing={() => {}}
                    placeholder="장소를 입력하세요."
                />
                </View>
                <TouchableOpacity style={styles.searchbtn} onPress={() => navigation.navigate("Result")}>
                        <MaterialIcons name="search" size={45} color="#0066cc" />
                </TouchableOpacity>
            </View>
            <View style={styles.cateArea}>
                <Text style={{fontSize:20, margin: 10}}>카테고리</Text>
                <View style={styles.catebtnArea}>
                    <TouchableOpacity style={styles.catebtn} >
                        <Text style={{fontSize:20}}>카테1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.catebtn} >
                        <Text style={{fontSize:20}}>카테2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.catebtn} >
                        <Text style={{fontSize:20}}>카테3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.catebtn} >
                        <Text style={{fontSize:20}}>카테4</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Container>
    );
};

const styles= StyleSheet.create({
    searchArea: {
        height: 100,
        flexDirection: 'row',
        marginVertical: 10,
    },
    inputArea: {
        height: 100,
        width: '85%',
    },
    searchbtn: {
        height: 55,
        width: 55,
        backgroundColor: 'white',
        top: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cateArea: {
        height: 150,
        marginTop: 30,
    },
    catebtnArea: { 
        height: 100,
        flexDirection: 'row',
    },
    catebtn: {
        backgroundColor: 'white',
        borderColor: '#0066cc',
        borderWidth: 4,
        borderRadius: 5,
        height: 60,
        width: 88,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
export default Search;