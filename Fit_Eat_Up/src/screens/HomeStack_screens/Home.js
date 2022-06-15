import React from 'react';
// import styled from 'styled-components/native';
import { Text, Button, StyleSheet, View, TouchableOpacity, Pressable } from 'react-native';
// import { SmallImage } from '../../components';
import { MaterialIcons } from '@expo/vector-icons';    //돋보기 이모티콘


const Home = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <View style={{flex:0.05}} />
            <View style={styles.recomtitle}>
                <Text style={{fontSize:23, margin:5}}>친구들과의 공통 추천맛집 검색</Text>
            </View>

            <View style={styles.recomselect}>
                    <TouchableOpacity 
                        style={styles.recombtn}
                        onPress={() => navigation.navigate("WithSearch")}>
                            <MaterialIcons name="search" size={55} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.recombtn} />
            </View>

            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20, margin:5}}>가본 장소 확인</Text>
            </View>
            <View style={styles.oxArea}>
                <View style={styles.oxbtnArea}>
                    <TouchableOpacity style={styles.oxbtn} >
                        <Text style={{fontSize:30, marginHorizontal: 50}}>O</Text>    
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.oxbtn}>
                        <Text style={{fontSize:30, marginHorizontal: 50}}>X</Text>  
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.05}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    recomtitle: {   //recommend 제목
        flex: 0.2,
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    recomselect: { //recommend 본내용
        flex: 0.8,
        backgroundColor: '#E0E0E0',
        borderColor: 'black',
        borderWidth: 4,
        marginTop: 10,
        marginBottom: 25,
        marginHorizontal: 25,
        borderRadius: 10,
        // flexDirection: 'row',
    },
    // recombtnArea: {
    //     width:60,
    //     height: 140,
    //     borderColor: 'black',
    //     borderWidth: 4,
    // },
    recombtn: { //recommend 버튼
        width: 60,
        height: 70,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 4,
        borderRadius: 5,
        left:278,
        top: -4,
    },
    oxArea: {   //ox영역    
        flex:1.3,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 60,
        justifyContent: 'flex-end',

    },
    oxbtnArea: {    //ox버튼 영역
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    oxbtn: {
        width: 136,
        height: 50,
        borderColor: 'black',
        borderWidth: 4,
    }
});

export default Home;





// const Container = styled.View`
//     flex: 1;
//     align-items: center; 
//     background-color: ${({ theme }) => theme.background};
// `;

// const Recomselect = styled.View`
//     background-color: #CCE5FF;
//     justify-content: center;
//     align-items: center;
//     width: 80%;
//     height: 30%;
//     border-radius: 10px;
//     margin: 15px;
// `;

// const OXselect = styled.View`
//     background-color: #CCE5FF;
//     justify-content: center;
//     align-items: center;
//     width: 250px;
//     height: 200px;
//     margin: 40px 0px 0px 0px;
// `;

// const ButtonContainer = styled.View`
//     flex-direction: row;
// `;

// const Home = ({ navigation }) => {
//     const _handleOButtonPress= () => {}
//     const _handleXButtonPress= () => {}

//     return (
//         <Container>
//             <Text style={{ fontSize: 20 }}>친구와의 추천맛집 검색</Text>
//             <Recomselect />
//             <Button title="WithSearch" onPress={() => navigation.navigate("WithSearch")} />
//             <OXselect />

//             <ButtonContainer>
//                 <OXButton title="O" onPress={_handleOButtonPress}/>
//                 <OXButton title="X" onPress={_handleXButtonPress}/>
//             </ButtonContainer>
//         </Container>
//     );
// };

