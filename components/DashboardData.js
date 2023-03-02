
import React, {useState} from 'react'
import {
    LineChart,
    StackedBarChart
} from "react-native-chart-kit";
import { COLOR_CODES } from '../config/Theme';
import { Card } from 'react-native-paper';
import {
    View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,
    SafeAreaView, Platform, StatusBar as appBar
} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';
import { Dimensions } from 'react-native';
import Expenses from './Expenses';
const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    legend: ["Prev week", "This week"],
    data: [
        [60, 60],
        [30, 30],
        [30, 37],
        [10, 22],
        [30, 13],
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"]
};
const DashboardData = ({ navigation }) => {
    const [activepage, setActivePage] = useState('dashboard')

    if(activepage=='expenses'){
        return <Expenses/>
    }
    return (
        <View>
            <CalendarStrip
                scrollable
                style={{ height: 100, paddingTop: 20, paddingBottom: 10, borderRadius: 20, marginTop: 10 }}
                calendarColor={'#3343CE'}
                highlightDateNumberStyle={{ color: '#fff', backgroundColor: COLOR_CODES.buttonColor, width: 20, height: 20, borderRadius: 20 / 2, }}
                highlightDateNameStyle={{ color: COLOR_CODES.buttonColor, fontWeight: 'bold' }}
                calendarHeaderStyle={{ color: 'white' }}
                dateNumberStyle={{ color: 'white' }}
                dateNameStyle={{ color: 'white' }}
                iconContainer={{ flex: 0.1 }}
            />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ margin: 5, alignItems: 'center', width: 150, textAlign: 'center' }}>

                    <Image
                        style={{ margin: 5, width: 150, height: 150, alignItems: 'center' }}
                        source={require('../assets/person.png')}
                    />

                </View>
                <View style={{ margin: 5, alignItems: 'center', width: 150, textAlign: 'center' }}>
                    <Text style={{ fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>Total Your Spendings Today</Text>
                    <Text style={{ fontSize: 20, marginTop: 10, color: COLOR_CODES.mainColor, fontWeight: 'bold', textAlign: 'center', alignSelf: 'center' }}>$20.25</Text>
                    <TouchableOpacity onPress={() => setActivePage('expenses')} style={{
                        margin: 10,
                        backgroundColor: '#F52887',
                        width: 120,
                        height: 40,
                        borderRadius: 30,
                        textAlign: 'center',
                        alignItems: 'center',
                        padding: 'auto',
                        justifyContent: 'center'
                    }}>

                        <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 18 }}>Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 5 }}>

                <Card style={{ backgroundColor: '#ffa726', width: '100%', height: 250 }}>
                    <View>
                        <Text style={{ color: '#fff', marginLeft: 10 }}>Weekly Visualizations</Text>
                        <ScrollView
                            showsVerticalScrollIndicator={false}>
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
                    </View>
                </Card>
            </View>

            <View style={{ marginTop: 20 }}>



                <Card style={{ backgroundColor: '#ffa726', width: '100%', height: 250, marginTop: 10 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}>
                        <Text style={{ color: '#fff', marginLeft: 10 }}>Comparision with previous Week</Text>
                        <StackedBarChart
                            style={{
                                marginVertical: 8,
                                // borderRadius: 16,
                                padding: 1
                            }}
                            data={data}
                            width={Dimensions.get("window").width}
                            height={200}
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
                        />
                        <View></View>
                    </ScrollView>
                </Card>
            </View>
        </View>
    )
}

export default DashboardData