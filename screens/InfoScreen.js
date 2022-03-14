import React, {useEffect} from 'react';
import {FlatList, Text, View} from "react-native";

const InfoScreen = () => {

    useEffect(async () => {
        // const data=await fetch("https://rest-prepaid-pp.nets.eu/account/viewtransactions", {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         "organization-number": "36275502",
        //         "country-id": "2"
        //     },
        //     body: JSON.stringify({
        //         accountNo: "6075322000000642331"
        //     })
        // });
        // console.log(data)
    },[])
    return (

        <View style={{
            flex:1,
            top:30,
        }}>
            <View style={{
                height:50,
                margin:20,
                marginBottom:70,
                top:30,
                flexDirection:"row"
            }}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20,paddingRight:30,fontWeight:"bold"}}>
                        Kundatænastan
                    </Text>
                    <Text style={{width:"70%"}}>
                        Spurningar kunnu sendast til sms@sms.fo
                        Ella ring til 34 19 00
                    </Text>
                </View>

            </View>
            <View style={{
                flexDirection:'column',
                width:"100%",
                padding:20
            }}>
                 <Text style={{fontWeight:"bold",fontSize:15}}>
                     Marknaðardeildin
                 </Text>
                <Text  >
                    SMS gávukortið verður umsitið av marknaðardeildini hjá SMS.
                    Deildin heldur til á ovastu hæddini, við síðuna av Fonn Flog.
                </Text>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:'space-between',
                width:"100%",
                padding:20,
                height:150,

            }}>
                <View style={{width:200,flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Opið er:</Text>
                    <Text>Mánadag til fríggjadag frá kl. 10-16.
                        Leygardag er stongt.
                        Sunnudag er stongt.
                    </Text>
                </View>
                <View style={{width:120,flexDirection:'column',alignSelf:'flex-end'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>SMS</Text>
                    <Text>á Trapputrøðni{"\n"}100 Tórshavn{"\n"}Tlf.: 341900{"\n"}sms@sms.fo{"\n"}www.sms.fo</Text>
                </View>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:'space-between',
                width:"100%",
                padding:20
            }}>
                <View style={{width:"100%",height:100,flexDirection:'column'}}>
                    <Text style={{fontWeight:'bold',fontSize:15}}>Treytir</Text>
                    <Text style={{fontSize:15}}>Gávukortið er galdandi í fimm ár frá útgávudegnum.
                        Kortið má goymast væl, tí burturmist kort verða ikki endurgoldin. Kortið kann ikki býtast um við reiðan pening.  Tænastan verður latin í samstarvi við PBS.</Text>

                </View>

            </View>

        </View>


    );
};

export default InfoScreen;
