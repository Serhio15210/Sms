import React, {Component, useContext, useEffect, useMemo, useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
<<<<<<< HEAD
    Text, FlatList, Button,ActivityIndicator
} from 'react-native'

import {BarCodeScanner} from "expo-barcode-scanner";
import GetCreditData from "../Api/GetCreditData";
import {useCardData} from "../provider/AppProvider";



const ScanScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    // const {cardNumber, setCardNumber,cardData,setCardData} = useContext(AppContext)
      const {setCardNumber,cardData,setCardData} = useCardData()
    const headerData = ["Dato", "Slag", "Upphædd", "Handil"]


    const getCreditData = () => {
        let data=[]
        try {

            const response =GetCreditData.getCreditDataByNumber().then((response) => {
                setCardData(response.data)
                setCardNumber('6075220999900040190')
                setIsLoading(false)
            });

        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {

=======
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
>>>>>>> github/master
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
<<<<<<< HEAD
    useEffect(async () => {

        await getCreditData()

    }, [])

    const handleBarCodeScanned = async ({type, data}) => {

=======

    const handleBarCodeScanned = async ({type, data}) => {

        setCardNumber(data)

>>>>>>> github/master

        setScanned(true);


    };
<<<<<<< HEAD


    // if (hasPermission === null) {
    //     return <Text>Requesting for camera permission</Text>;
    // }
    // if (hasPermission === false) {
    //     return <Text>No access to camera</Text>;
    // }

    return (
            isLoading?
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                }}>
                    <ActivityIndicator size="large" color="black" />
                </View>:
                scanned ?
            <View style={{
                flex: 1,
                top: 30,
            }}>

                <View style={{
                    height: 50,
                    margin: 20,
                    marginBottom: 40,
                    top: 30,
                    flexDirection: "row"
                }}>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{fontSize: 20, paddingRight: 30, fontWeight: "bold"}}>
                            Støða: Virkið
                        </Text>
                        <Text>
                            Útgongur: {new Date().getDate()}-{new Date().getFullYear()}
                        </Text>
                    </View>

                    <Text style={{fontSize: 20, fontWeight: "bold"}}>
                        Upphædd:{cardData.balance}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'column',
                    width: "100%",
                    padding: 10
                }}>

                    <FlatList data={cardData.transactions}  keyExtractor={(item, index) => `key-${index}`}
                              renderItem={({item,index }) => {
                                  return (
                                      <View  key={index} style={{
                                          padding: 10,
                                          flexDirection: 'row',
                                          alignItems: 'center',

                                          marginBottom: 5,
                                          marginRight: 10
                                      }}>
                                          <Text style={{width: 100}}>{item.operationDate||"null"}</Text>
                                          <Text style={{width: 80}}>{item.transactionType||"null"}</Text>
                                          <Text style={{width: 100}}>{item.currency} {item.amount||"null"}</Text>
                                          <Text>{item.storeName||"null"}</Text>

                                      </View>
                                  )
                              }}
                              ListHeaderComponent={<View style={{padding: 10, flexDirection: 'row'}}>
                                  <Text style={{width: 120, fontWeight: "bold"}}>{headerData[0]}</Text>
                                  <Text style={{width: 50, fontWeight: "bold" }}>{headerData[1]}</Text>
                                  <Text style={{width: 100, fontWeight: "bold"}}>{headerData[2]}</Text>
                                  <Text style={{fontWeight: "bold"}}>{headerData[3]}</Text></View>}/>
                </View>

            </View> :
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
=======
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
>>>>>>> github/master
    )
}
export default ScanScreen
