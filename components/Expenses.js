import { Modal, StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import { COLOR_CODES } from '../config/Theme';
import { Dimensions } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import { useState } from 'react';
import { DataTable } from 'react-native-paper';

import {
    LineChart
} from "react-native-chart-kit";
// import DatePicker from 'react-native-date-picker'

export default function Expenses({ navigation }) {
    const [activecard, setActiveCard] = useState(0)
    const [showmodal, setShowModal] = useState(false)
    const [date, setDate] = useState(new Date())

    return (
        <View style={styles.container}>

            <Modal
                transparant={true}
                visible={showmodal}>
                <View style={{ flex: 1, backgroundColor: '#000000aa', justifyContent: 'center' }}>
                    <View style={{ margin: 50, padding: 40, backgroundColor: '#ffffff', borderRadius: 20 }}>
                        <Text style={{ position: 'absolute', top: 10, fontSize: 20, alignSelf: 'center' }}>Add New Expenses</Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: "1%",
                                marginTop: 10,
                                marginBottom: 10
                            }}
                        />

                        <Text>Date:</Text>
                        {/* <DatePicker date={date} onDateChange={setDate}/> */}
                        <Text>Expense Amount:</Text>
                        <Text>Expense Description:</Text>
                        <Text>Link to Family Member:</Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: "0%",
                                marginTop: 10,
                                marginBottom: 10
                            }}
                        />
                        <TouchableOpacity style={{ borderRadius: 10, width: 140, height: 30, backgroundColor: COLOR_CODES.buttonColor, position: 'absolute', bottom: 10, alignSelf: 'center' }} onPress={() => setShowModal(false)}>
                            <Text style={{ color: '#fff', fontSize: 18, alignSelf: 'center' }}>Save & Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <TouchableOpacity style={{
                    marginTop: 20,
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
                        opacity: 1,
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
                    // height: Dimensions.get('window').height,

                    width: Dimensions.get('screen').width
                }}>

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
                            <Card onPress={() => setActiveCard(0)} style={activecard == 0 ? styles.activeCard : activecard == 0 ? styles.activeCard : styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{ alignSelf: 'center', marginTop: -6 }}>Abe</Text>
                            </Card>
                            <Card onPress={() => setActiveCard(1)} style={activecard == 1 ? styles.activeCard : styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{ alignSelf: 'center', marginTop: -6 }}>Kebe</Text>
                            </Card>
                            <Card onPress={() => setActiveCard(2)} style={activecard == 2 ? styles.activeCard : styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{ alignSelf: 'center', marginTop: -6 }}>Father</Text>
                            </Card>
                            <Card onPress={() => setActiveCard(3)} style={activecard == 3 ? styles.activeCard : styles.inActiveCard}>
                                <Image source={require('../assets/guest.png')} style={{ width: 100, height: 100, }} />
                                <Text style={{ alignSelf: 'center', marginTop: -6 }}>Mother</Text>
                            </Card>
                        </ScrollView>

                    </View>
                    <Text style={{ marginLeft: 20, marginTop: 20 }}>Expense Graph By Family Member</Text>
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
                    <Text style={{ marginLeft: 20, marginTop: 20 }}>Expense by Expense Item</Text>
                    <LineChart
                        data={{
                            labels: ["School Fee", "Food", "Telecom", "Fuel", "Other"],
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginLeft: 20, marginTop: 20 }}>Expense List</Text>
                        <Text style={{ fontWeight: 'bold', marginRight: 20, marginTop: 20, color: COLOR_CODES.mainColor }} onPress={() => setShowModal(true)}> + Add Expense</Text>
                    </View>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Type</DataTable.Title>
                            <DataTable.Title>Date</DataTable.Title>
                            <DataTable.Title numeric>Price</DataTable.Title>
                        </DataTable.Header>

                        <DataTable.Row>
                            <DataTable.Cell>Food</DataTable.Cell>
                            <DataTable.Cell>2023-03-01</DataTable.Cell>
                            <DataTable.Cell numeric>$ 6.0</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Row>
                            <DataTable.Cell>School Fee</DataTable.Cell>
                            <DataTable.Cell >2023-03-01</DataTable.Cell>
                            <DataTable.Cell numeric>$ 108.0</DataTable.Cell>
                        </DataTable.Row>

                        <DataTable.Pagination
                            page={1}
                            numberOfPages={3}
                            onPageChange={page => {
                                console.log(page);
                            }}
                            label="1-2 of 2"
                        />
                    </DataTable>
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    activeCard: {
        margin: 10,
        height: 110,
        backgroundColor: COLOR_CODES.mainColor
    },
    inActiveCard: {
        margin: 10,
        height: 110,
    }
});
