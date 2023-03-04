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

export default function Family({ navigation }) {
  const [activecard, setActiveCard] = useState(0)
  const [showmodal, setShowModal] = useState(false)
  const [date, setDate] = useState(new Date())

  return (
    <View>

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

            <Text style={{ alignSelf: 'center', fontSize: 30, color: COLOR_CODES.buttonColor, fontWeight: 'bold' }}>6 Family members</Text>

          </TouchableOpacity>
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
      }}>



      </View>
      <ScrollView>
        <View>
          <Card style={{ height: 150, marginTop: 10, backgroundColor: '#9FE2BF' }}>
<View>
  
</View>
          </Card>
          <Card style={{ height: 150, marginTop: 10, backgroundColor: '#9FE2BF' }}>

          </Card>
          <Card style={{ height: 150, marginTop: 10, backgroundColor: '#9FE2BF' }}>

          </Card>
          <Card style={{ height: 150, marginTop: 10, backgroundColor: '#9FE2BF' }}>

          </Card>
          <Card style={{ height: 150, marginTop: 10, backgroundColor: '#9FE2BF' }}>

          </Card>
        </View>
      </ScrollView>

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
