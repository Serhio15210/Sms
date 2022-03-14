import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList} from "react-native";
import {Row, Rows, Table} from "react-native-table-component";
import {HistoryContext} from "../App";


const HistoryScreen = () => {
    const headerData=["Dato","Kortnummar","Upphædd"]
    const {cardNumber,setCardNumber} = useContext(HistoryContext)
    const data=[
        {date:"03.05.16 16:34",cardNum:cardNumber,sum:"Kr. 3.000,00"},
        {date:"03.05.16 20:34",cardNum:cardNumber,sum:"Kr. 2.735,80"},
        {date:"03.05.16 16:34",cardNum:cardNumber,sum:"Kr. 267,25"},
        {date:"13.05.16 16:34",cardNum:cardNumber,sum:"Kr. 2,50"},
        {date:"03.05.16 16:34",cardNum:cardNumber,sum:"Kr. 352,50"}
    ]
    useEffect(async () => {
        const response = await fetch('http://192.168.1.6:19000/account/viewtransactions', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                accountNo: '6075220999900040190',

            })
        })

        const json = await response.json();
        console.log(json)
    },[])
    return (
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
                        Seinastu skanningar
                    </Text>
                </View>

            </View>
            <View style={{
                flexDirection:'column',
                width:"100%",
                padding:10
            }}>
                <FlatList data={cardNumber&&data} keyExtractor={(item, index) => `key-${index}`} renderItem={({item,index})=>{
                    return (
                        <View key={index} style={{
                            padding:10,
                            flexDirection:'row',
                            alignItems:'center',

                            marginBottom:5,

                        }}>
                            <Text style={{width:110,marginRight:5}}>{item.date}</Text>
                            <Text style={{width:170,marginRight:10}} >{item.cardNum}</Text>
                            <Text style={{width:100,fontWeight:"bold"}}>{item.sum}</Text>

                        </View>
                    )
                }}
                          ListHeaderComponent={<View style={{padding:10,flexDirection:'row'}}><Text style={{width:110,fontWeight:"bold",marginRight:5}}>{headerData[0]}</Text>
                              <Text style={{width:170,fontWeight:"bold",marginRight:10}} >{headerData[1]}</Text>
                              <Text style={{width:100,fontWeight:"bold"}} >{headerData[2]}</Text>
                              </View>}/>
            </View>

        </View>
    );
};

export default HistoryScreen;
