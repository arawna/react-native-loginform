import Login from "./screens/Login";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "./screens/Register";

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;