import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import { Card, ToggleButton } from 'react-native-paper';
import { COLOR_CODES } from '../config/Theme';

const Settings = () => {
  const [isActiveNotification, setActiveNotification] = useState(false);
  const [isActiveDaily, setActiveDaily] = useState(false);
  const [isActiveEmail, setActiveEmail] = useState(true);

  const toggleSwitch = () => {
    setActiveNotification(!isActiveNotification)
  }
  const toggleSwitchEmail = () => {
    setActiveDaily(!isActiveDaily)
  }
  const toggleSwitchDaily = () => {
    setActiveEmail(!isActiveEmail)
  }
  return (
    <View>
      <Text style={{  fontSize: 20,paddingLeft:10,paddingBottom:10, paddingTop:10  }}>Profile</Text>
      <Card style={{flex:1, padding:10}}>
        <View style={{ padding:10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >First Name</Text>
          <Text >Mule</Text>
          
        </View>
       
        <View style={{  padding:10,  flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Last Name</Text>
          <Text>M</Text>
        </View>
        <View style={{  padding:10,  flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Email</Text>
          <Text>muletest@gmail.com</Text>
        </View>
        <View style={{  padding:10,  flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Family Member</Text>
        <Text>--</Text>
        </View>
        <View style={{  padding:10,  flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Daily Expense Quota</Text>
          <Text >Not Set</Text>
  
        </View>
       
      </Card>
      <Text style={{ fontSize: 20,paddingLeft:10,paddingBottom:10, paddingTop:10 }}>My Account</Text>
      <Card style={{paddingTop:10}}>
        <View style={{   paddingLeft:10, marginTop:15,flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Show Notification quota reachs limit</Text>
          <Switch


            trackColor={{ false: '#767577', true: COLOR_CODES.mainColor }}
            thumbColor={isActiveNotification ? COLOR_CODES.buttonColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={isActiveNotification}
            onValueChange={toggleSwitch}

          />
        </View>
        <View style={{  paddingLeft:10,  marginTop:15,flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Enable Quota percentage</Text>
          <Switch


            trackColor={{ false: '#767577', true: COLOR_CODES.mainColor }}
            thumbColor={isActiveEmail ? COLOR_CODES.buttonColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={isActiveEmail}
            onValueChange={toggleSwitchDaily}

          />
        </View>
        <View style={{  paddingLeft:10,  marginTop:15,flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text >Email me daily usage</Text>
          <Switch


            trackColor={{ false: '#767577', true: COLOR_CODES.mainColor }}
            thumbColor={isActiveDaily ? COLOR_CODES.buttonColor : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            value={isActiveDaily}
            onValueChange={toggleSwitchEmail}

          />
        </View>
       
      </Card>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})