import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';

const PlaceDetail = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.placename}>
                <Text style={{fontSize: 25}}>음식점이름</Text>
            </View>
            <View style={styles.placeImage}>
                <Text style={{fontSize: 20}}>음식점사진</Text>
            </View>
            <View style={styles.placedetailsArea}>
                <Text style={{fontSize: 20}}>위치 및 연락처 및 운영시간</Text>
            </View>
            <View style={styles.placedetailsArea}>
                <Text style={{fontSize: 20}}>후기</Text>
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    placename: {    //음식점명
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeImage: {   //음식점 사진
        height: 230,
        width: 300,
        backgroundColor: '#d5d5d5',
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
    },
    placedetailsArea: { //음식점 위치, 연락처, 운영시간 등 상세정보
        height: 140,
        width: 300,
        backgroundColor: '#d5d5d5',
        margin: 5,
    },
    reviewArea: {

    },
});

export default PlaceDetail;