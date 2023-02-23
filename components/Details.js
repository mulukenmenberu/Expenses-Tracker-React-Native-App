import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { COLOR_CODES } from '../config/Theme';
import { Dimensions } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from 'react';
import {
    LineChart
} from "react-native-chart-kit";

export default function Details({navigation}) {
    const [activecard, setActiveCard] = useState(0)
    return (
        <View style={styles.container}>
         
            <View style={styles.container}>
                <TouchableOpacity style={{
                    marginTop:20,
                    backgroundColor: '#fff',
                    width: 200, height: 200, borderRadius: 200 / 2, opacity: 0.4
                }}>
                    <TouchableOpacity style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        backgroundColor: '#fff',
                        marginTop: 25,
                        borderWidth: 3,
                        opacity:1,
                        borderColor: COLOR_CODES.buttonColor,
                        width: 150, height: 150, borderRadius: 150 / 2
                    }}>

                        <Text style={{ alignSelf: 'center', fontSize: 30, color: COLOR_CODES.buttonColor, fontWeight: 'bold' }}>94%</Text>
                        <Text style={{ alignSelf: 'center' }}>Weekly Consumption</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <Card style={{
                    borderRadiusTopLeft: 20,
                    backgroundColor: '#fff',
                    height: Dimensions.get('window').height - 300,

                    width: Dimensions.get('window').width
                }}>
                       <ScrollView>
                    <TouchableOpacity style={{


                        margin: 10,
                        backgroundColor: '#F52887',
                        width: 200,
                        height: 40,
                        borderRadius: 30,
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: 'auto',
                        justifyContent: 'center',
                        alignSelf: 'center'
                    }}>

                        <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 18 }}>Select Family member</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <Card onPress = {()=>setActiveCard(0)} style={activecard==0?styles.activeCard:activecard==0?styles.activeCard:styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{alignSelf:'center', marginTop:-6}}>Abe</Text>
                            </Card>
                            <Card onPress = {()=>setActiveCard(1)} style={activecard==1?styles.activeCard:styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{alignSelf:'center', marginTop:-6}}>Kebe</Text>
                            </Card>
                            <Card onPress = {()=>setActiveCard(2)} style={activecard==2?styles.activeCard:styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{alignSelf:'center', marginTop:-6}}>Father</Text>
                            </Card>
                            <Card onPress = {()=>setActiveCard(3)} style={activecard==3?styles.activeCard:styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{alignSelf:'center', marginTop:-6}}>Mother</Text>
                            </Card>
                        </ScrollView>
                       
                    </View>
                    <Text style={{marginLeft:10}}>Name: Abe</Text>
                    <Text style={{marginLeft:10}}>Settled Weekly Budget: $100</Text>
                    <Text style={{marginLeft:10}}>Consumption: $100</Text>
                    <LineChart
                                    data={{
                                        labels: ["Mon.", "Tues.", "Wednes.", "Thurs.", "Fri."],
                                        datasets: [
                                            {
                                                data: [
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                    Math.random() * 100,
                                                ]
                                            }
                                        ]
                                    }}
                                    width={Dimensions.get("window").width}
                                    height={200}
                                    yAxisLabel="$"
                                    yAxisSuffix=""
                                    yAxisInterval={1}
                                    chartConfig={{
                                        backgroundColor: "#e26a00",
                                        backgroundGradientFrom: "#fb8c00",
                                        backgroundGradientTo: "#ffa726",
                                        decimalPlaces: 2,
                                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                        style: {
                                            borderRadius: 16
                                        },
                                        propsForDots: {
                                            r: "6",
                                            strokeWidth: "2",
                                            stroke: "#ffa726"
                                        }
                                    }}
                                    bezier
                                    style={{
                                        marginVertical: 8,
                                    }}
                                />
                              </ScrollView>
                </Card>
                
            </View>
          
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_CODES.mainColor,
        alignItems: 'center',
    },
    activeCard:{
    margin: 10, 
    height: 110,  
    backgroundColor: COLOR_CODES.mainColor 
    },
    inActiveCard:{
        margin: 10, 
        height: 110, 
        }
});
