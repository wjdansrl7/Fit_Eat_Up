import React from 'react';
import { Text, Button, StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';

const PlaceDetail = () => {
    return(
        <View style={styles.container}>
            <View style={styles.placename}>
                <Text style={{fontSize: 20}}>음식점명</Text>
            </View>
            <View style={styles.placeImage}>
                <Text style={{fontSize: 20}}>음식점사진</Text>
            </View>
            <View style={styles.placedetails}>
                <Text style={{fontSize: 20}}>음식점상세정보</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    placename: {    //음식점명
        backgroundColor: 'red',
        height: 50,
    },
    placeImage: {   //음식점 사진
        flex: 0.8,
        backgroundColor: 'blue'
    },
    placedetails: { //음식점 위치, 연락처, 운영시간 등 상세정보
        flex: 1,
        backgroundColor: 'green'
    },
});

export default PlaceDetail;