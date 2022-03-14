import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Text, View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ScanScreen from "../screens/ScanScreen";
import HistoryScreen from "../screens/HistoryScreen";
import InfoScreen from "../screens/InfoScreen";
const Tab = createBottomTabNavigator();



const Tabs = () => {

    return (
        <Tab.Navigator initialRouteName="ScanScreen" screenOptions={{
            headerStyle:{
                backgroundColor:'black'
            },
            tabBarStyle: {
                height: 80,
                borderTopWidth:2,
                borderColor:'grey',

            },

            tabBarItemStyle: {
                borderLeftWidth:2,
                borderColor:'grey',

            },

            headerTitle: () => (
                <View style={{
                    width: "100%",
                    alignItems:'center',
                    justifyContent:'center',
                    alignSelf:'center',
                    top:30,
                    left:140

                }}>
                    <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        borderColor: "black",
                        borderWidth: 2,
                        backgroundColor: "black",
                        justifyContent:'center'
                    }}>
                        <Text style={{color:"white",alignSelf:'center',fontWeight:"bold",fontSize:25}}>S M S</Text>
                    </View>

                </View>
            )
        }}
        >

            <Tab.Screen name={"HistoryScreen"} component={HistoryScreen} options={{
                title:'',

                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: 150,
                        }}>
                        <FontAwesome5 name="history" style={{
                            width: 30,
                            height: 30,
                            textAlign: "center",
                            fontSize: 30,
                            color:focused?"black":"gray",

                        }} />
                        <Text style={{
                            color:focused?"black":"gray",
                            fontSize: 11,
                            textAlign: "center",
                            top:10
                        }}>История</Text>
                    </View>
                ),
            }} >

            </Tab.Screen>


            <Tab.Screen name={"ScanScreen"} component={ScanScreen} options={{
                title:'',
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                            width: 150,

                        }}>
                        <FontAwesome5 name="circle" style={{
                            width: 30,
                            height: 30,
                            textAlign: "center",
                            color:focused?"black":"gray",
                            fontSize: 30,
                        }} />
                        <Text style={{
                            color:focused?"black":"gray",
                            fontSize: 11,
                            textAlign: "center",
                            top:10
                        }}>Скан</Text>
                    </View>
                ),
            }} />

            <Tab.Screen name={"InfoScreen"} component={InfoScreen} options={{
                title:'',
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            top: 0,
                            height: "100%",
                            width: 150,
                            borderColor:'grey'
                        }}>
                        <FontAwesome5 name="info" style={{
                            width: 30,
                            height: 30,
                            color:focused?"black":"gray",
                            textAlign: "center",

                            fontSize: 30,
                        }} />
                        <Text style={{
                            color:focused?"black":"gray",
                            fontSize: 11,
                            textAlign: "center",
                            top:10
                        }}>Инфо</Text>
                    </View>
                ),
            }} />
        </Tab.Navigator>
    );
};

export default Tabs;
