import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';

const GoodList = () => {
    return(
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={{fontSize: 23}}>좋아요 리스트</Text>
            </View>
            <View style={{height: 15}}/>
            <View style={styles.oneLine}>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>
            <View style={{height: 15}}/>
            <View style={styles.oneLine}>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>
            <View style={{height: 15}}/>
            <View style={styles.oneLine}>
                <View style={styles.foodArea}>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                    <View style={styles.foodImage}></View>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    oneLine: {
        height: 150,
    },
    foodArea: {
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    foodImage: {
        height: 90,
        width: 90,
        backgroundColor: '#808080',
        borderRadius: 10,
        margin: 15,
    },
});
export default GoodList;