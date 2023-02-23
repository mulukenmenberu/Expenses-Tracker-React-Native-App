import {
    View, Text, StyleSheet, Image, TouchableOpacity
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { COLOR_CODES } from '../config/Theme';
import Dashboard from './Dashboard';
const Welcome = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Image
                style={{
                    width: 100, height: 100,
                    borderRadius: 100 / 2,
                    borderWidth: 3,
                    borderColor: COLOR_CODES.buttonColor,

                }}
                source={require('../assets/logo.png')} />
            <Text style={{ color: '#FFF', fontSize: 25 }}>My Budget</Text>
            <Text style={{ color: '#FFF', fontSize: 15 }}>Manage expenses, staye informed</Text>
            <View style={{ flexDirection: 'row', marginTop: 80 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{
                    margin: 10,
                    backgroundColor: COLOR_CODES.buttonColor,
                    width: 120,
                    height: 40,
                    borderRadius: 30,
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: 'auto',
                    justifyContent: 'center'
                }}>
                    <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 18 }}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{
                    margin: 10,
                    backgroundColor: COLOR_CODES.buttonColor,
                    width: 120,
                    height: 40,
                    borderRadius: 30,
                    textAlign: 'center',
                    alignItems: 'center',
                    padding: 'auto',
                    justifyContent: 'center'
                }}>
                    <Text style={{ alignSelf: 'center', color: '#fff', fontSize: 18 }}>Sign Up</Text>
                </TouchableOpacity>

            </View>
            <StatusBar style="light" />
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_CODES.mainColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Welcome