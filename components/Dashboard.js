import {
    View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,
    SafeAreaView, Platform, StatusBar as appBar
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { FloatingAction } from "react-native-floating-action";
import { Dimensions } from 'react-native';
import Family from './Family';
import Settings from './Settings';
import Expenses from './Expenses';
import DashboardData from './DashboardData';

import { useState } from 'react';
const actions = [
    {
        text: "Dashboard",
        icon: require("../assets/favicon.png"),
        name: "dashboard",
        position: 1
    },
    {
        text: "Family members",
        icon: require("../assets/favicon.png"),
        name: "family_member",
        position: 2
    },
    {
        text: "Expenses",
        icon: require("../assets/favicon.png"),
        name: "expenses",
        position: 3
    },
    {
        text: "Settings",
        icon: require("../assets/favicon.png"),
        name: "settings",
        position: 4
    }

];

const Dashboard = () => {
    const [activepage, setActivePage] = useState('dashboard')
    const getBodyContent = ()=>{
    if(activepage=='family_member'){
        return <Family/>
    }else if(activepage=='expenses'){
        return <Expenses/>

    }else if(activepage=='settings'){
        return <Settings/>

    }else if(activepage=='dashboard'){
        return <DashboardData/>
    } 
}

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between',
                }}>
                    <Text style={{ fontSize: 20, marginTop: 1 }}>Welcome, Mule</Text>
                    <Image
                        style={{ height: 40, width: 40, borderRadius: 40 / 2 }}
                        source={require('../assets/mule.png')}
                    />

                </View>

              
              {
                getBodyContent()
                }


            </ScrollView>
            <StatusBar style="dark" />
            <FloatingAction
                actions={actions}
                onPressItem={name => {
                    setActivePage(name)
                }}
            />

        </SafeAreaView>
    )
            }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? appBar.currentHeight : 0,
        marginLeft: 10,
        marginRight: 10
    },
});

export default Dashboard