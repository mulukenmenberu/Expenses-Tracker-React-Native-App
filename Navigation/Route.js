import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../components/Welcome"
import Dashboard from "../components/Dashboard"
import Details from "../components/Details"
import DashboardData from "../components/DashboardData"
import { COLOR_CODES } from "../config/Theme"
const Stack = createNativeStackNavigator()
const Route = ()=>{
return (
    <Stack.Navigator
     screenOptions={{ headerShown: false }}
     >
        <Stack.Screen 
        name = "Welcome"
        component = {Welcome}
        />
   <Stack.Screen 
        name = "Dashboard"
        component = {Dashboard}
        />

<Stack.Screen 
        name = "DashboardData"
        component = {DashboardData}
        />
   <Stack.Screen 
        name = "Details"
        component = {Details}
        options={{
            title: 'Details',
            headerTitleStyle: {
              color: '#fff',
            },
            headerStyle: {
              backgroundColor: COLOR_CODES.mainColor,
            },
            headerShown:true,
            headerTintColor:'#fff'
          }}
        />

    </Stack.Navigator>
)
}
export default Route