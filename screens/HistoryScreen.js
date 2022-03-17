import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";


import {useCardData} from "../provider/AppProvider";

const HistoryScreen = () => {
    const headerData=["Dato","Kortnummar","Upphædd"]
    // const {cardData,cardNumber} = useContext(AppContext)
    const {cardData,cardNumber} = useCardData()

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
                <FlatList data={cardData.transactions} keyExtractor={(item, index) => `key-${index}`} renderItem={({item,index})=>{
                    return (
                        <View key={index} style={{
                            padding:10,
                            flexDirection:'row',
                            alignItems:'center',

                            marginBottom:5,

                        }}>
                            <Text style={{width:110,marginRight:5}}>{item.operationDate||"null"}</Text>
                            <Text style={{width:170,marginRight:10}} >{cardNumber||"null"}</Text>
                            <Text style={{width:100,fontWeight:"bold"}}>{item.amount||"null"}</Text>

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
