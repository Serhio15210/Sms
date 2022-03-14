import React, {Component, useContext, useEffect, useMemo, useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text, FlatList,
} from 'react-native'
import {CardIOModule} from "react-native-awesome-card-io";
import {BarCodeScanner} from "expo-barcode-scanner";
import {Touchable} from "react-native-web";
import {Camera} from "expo-camera";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {HistoryContext} from "../App";

const ScanScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const {cardNumber,setCardNumber} = useContext(HistoryContext)
    const [cardData,setCardData]=useState([])
    const headerData=["Dato","Slag","Upphædd","Handil"]
    const data=[
        {date:"03.05.16 16:34",flag:"INN",sum:"Kr. 3.000,00",notes:"SMS 4772334"},
        {date:"03.05.16 20:34",flag:"ÚT",sum:"Kr. 2.735,80",notes:"Тест 3004872"},
        {date:"03.05.16 16:34",flag:"ÚT",sum:"Kr. 267,25",notes:"Тест 3004872"},
        {date:"13.05.16 16:34",flag:"ÚT",sum:"Kr. 2,50",notes:"Тест 3004872"},
        {date:"03.05.16 16:34",flag:"ÚT",sum:"Kr. 352,50",notes:"Тест 3004872"}
    ]
    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({type, data}) => {

        setCardNumber(data)


        setScanned(true);


    };
    // useMemo(async () => {
    //     const response = await fetch('https://rest-prepaid-pp.nets.eu/account/viewtransactions', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             accountNo: cardNumber,
    //
    //         })
    //     })
    //
    //     const json = await response.json();
    //     setCardData(json.balance)
    // },[cardNumber])

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        scanned ?
                <View style={{
                    flex:1,
                    top:30,
                }}>
                    <View style={{
                        height:50,
                        margin:20,
                        marginBottom:40,
                        top:30,
                        flexDirection:"row"
                    }}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{fontSize:20,paddingRight:30,fontWeight:"bold"}}>
                                Støða: Virkið
                            </Text>
                            <Text  >
                                Útgongur: {new Date().getDate()}-{new Date().getFullYear()}
                            </Text>
                        </View>

                        <Text style={{fontSize:20,fontWeight:"bold"}}>
                            Upphædd: {cardData}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection:'column',
                        width:"100%",
                        padding:10
                    }}>
                        <FlatList data={data} keyExtractor={(item, index) => `key-${index}`} renderItem={({item,index})=>{
                            return (
                                <View key={index} style={{
                                    padding:10,
                                    flexDirection:'row',
                                    alignItems:'center',

                                    marginBottom:5,
                                    marginRight:10
                                }}>
                                    <Text style={{width:120}}>{item.date}</Text>
                                    <Text style={{width:50}} >{item.flag}</Text>
                                    <Text style={{width:100}} >{item.sum}</Text>
                                    <Text>{item.notes}</Text>

                                </View>
                            )
                        }}
                                  ListHeaderComponent={<View style={{padding:10,flexDirection:'row'}}><Text style={{width:120,fontWeight:"bold"}}>{headerData[0]}</Text>
                                      <Text style={{width:50,fontWeight:"bold"}} >{headerData[1]}</Text>
                                      <Text style={{width:100,fontWeight:"bold"}} >{headerData[2]}</Text>
                                      <Text style={{fontWeight:"bold"}}>{headerData[3]}</Text></View>}/>
                    </View>
                    <Text>{cardNumber}</Text>

                </View>:
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {/*<TouchableOpacity style={{*/}
            {/*    height: 100,*/}
            {/*    width: 100,*/}
            {/*    borderRadius: 50,*/}
            {/*    borderColor: 'white',*/}
            {/*    borderWidth: 2,*/}
            {/*    top: "40%",*/}
            {/*    alignSelf: 'center'*/}

            {/*}} onPress={() => setScanned(false)}/>*/}
        </View>
    )
}
export default ScanScreen
