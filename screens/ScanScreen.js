import React, {Component, useContext, useEffect, useMemo, useState} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
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

        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    useEffect(async () => {

        await getCreditData()

    }, [])

    const handleBarCodeScanned = async ({type, data}) => {


        setScanned(true);


    };


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
    )
}
export default ScanScreen
