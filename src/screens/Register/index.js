import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class Register extends React.Component {
    render() {
        return (
            <View>
                <Text>Register Ekrani</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                    <Text>Login Sayfasına git</Text>
                </TouchableOpacity>
            </View>
        )
    }
}