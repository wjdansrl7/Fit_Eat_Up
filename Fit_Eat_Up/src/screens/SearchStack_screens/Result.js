import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
`;

const Result = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView extraScrollHeight={20}>
            <Container>
                    <View style={styles.searchname}>
                        <Text style={styles.title}>검색어명</Text>
                    </View>
                <View style={styles.searchlist}>
                    <View style={styles.onelistline}>
                        <TouchableOpacity onPress={() => navigation.navigate("PlaceDetail")} >
                            <View style={styles.box}>
                                <Text style={styles.title}>음식점1</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점2</Text>
                        </View>
                    </View>
                    <View style={styles.onelistline}>
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점3</Text>
                        </View>    
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점4</Text>
                        </View>
                    </View>
                    <View style={styles.onelistline}>
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점5</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점6</Text>
                        </View>
                    </View>
                    <View style={styles.onelistline}>
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점7</Text>
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.title}>음식점8</Text>
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
        fontWeight: '600',
        margin: 10
    },
    searchname: {
        width:370,
        height: 50,
        backgroundColor: '#CCE5FF',
        margin: 15,
    },
    searchlist: {
        width: 370,
        height: 800,
    },
    onelistline: {
        width: 360,
        height: 170,
        margin: 5,
        flexDirection: 'row',
    },
    box: {
        width: 160,
        height: 150,
        backgroundColor: '#d5d5d5',
        margin: 10,
    }
})
export default Result;