// 친구와 함께 검색하는 창

import React from 'react';
import styled from 'styled-components/native';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const WithSearch = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <Container>
                <Text style={styles.title}>친구1 과의 공통맛집 추천</Text>
                    <View style={styles.resultlist}>
                        <View style={styles.box}>
                            <TouchableOpacity onPress={() => navigation.navigate("PlaceDetail")}>
                                <View style={styles.foodbox}>
                                    <Text style={styles.title}>음식점1</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.percentagebox}>
                                <Text style={styles.title}>93%</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.foodbox}>
                                <Text style={styles.title}>음식점2</Text>
                            </View>
                            <View style={styles.percentagebox}>
                                <Text style={styles.title}>85%</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.foodbox}>
                                <Text style={styles.title}>음식점3</Text>
                            </View>
                            <View style={styles.percentagebox}>
                                <Text style={styles.title}>67%</Text>
                            </View>
                        </View>
                        <View style={styles.box}>
                            <View style={styles.foodbox}>
                                <Text style={styles.title}>음식점4</Text>
                            </View>
                            <View style={styles.percentagebox}>
                                <Text style={styles.title}></Text>
                            </View>
                        </View>
                    </View>
            </Container>
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        margin: 10,
    },
    resultlist: {
        width: 370,
        height: 800,
        backgroundColor: '#CCE5FF',
    },
    percentagebox: {
        width: 300,
        height: 50,
        backgroundColor: '#DCDCDC',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    foodbox: {
        width: 300,
        height: 150,
        backgroundColor: '#d5d5d5',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    box: {
        width: 360,
        height: 220,
        margin: 5,
        backgroundColor: '#FFCC99',
        alignItems: 'center',
    },
})

export default WithSearch;