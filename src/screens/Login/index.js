import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Formik } from "formik";
import * as Yup from "yup";

export default class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            hidePassword:true
        }
    }

    _handleSubmit = () => {
        alert("Form Post Edildi")
        this.props.navigation.navigate("Register")
    }

    render() {
        return (
            <SafeAreaView style={style.body}>
                <ScrollView>
                    <View style={style.header}>
                        <Text style={style.title}>Sign In</Text>
                    </View>
                    <View style={style.logo_area}>
                        <Image source={require("../../../assets/login.png")} style={{width:200,height:200,resizeMode:"contain"}}/>
                    </View>
                    <View style={style.board}>
                        <Formik initialValues={{
                            username:"",
                            password:""
                        }} onSubmit={this._handleSubmit}
                           validationSchema={Yup.object().shape({
                            username:Yup.string().required(),
                            password:Yup.string().required()
                           })}
                        >
                            {({ values, handleSubmit, handleChange, errors}) => (
                            <>
                                <View style={style.item}>
                                    <TextInput 
                                        style={style.input}
                                        placeholder={"Username"}
                                        placeholderTextColor="gray"
                                        value={values.username}
                                        onChangeText={handleChange("username")}
                                    />
                                    {errors.username && <Text style={{color:"red"}}>{errors.username}</Text>}
                                </View>
                                <View style={style.item}>
                                    <TextInput 
                                        style={style.input}
                                        placeholder={"Password"}
                                        placeholderTextColor="gray"
                                        value={values.password}
                                        onChangeText={handleChange("password")}
                                        secureTextEntry={this.state.hidePassword}
                                    />
                                    {errors.password && <Text style={{color:"red"}}>{errors.password}</Text>}
                                    <TouchableOpacity onPress={() => this.setState({hidePassword:!this.state.hidePassword})} style={{position:"absolute",right:15,top:17}}>
                                        <FontAwesome5 color={"gray"} size={15} name={this.state.hidePassword ? "eye-slash" : "eye"}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={[style.item,{flexDirection:"row",justifyContent:"flex-end"}]}>
                                    <Text style={{color:"#525464"}}>Forgot your password?</Text>
                                </View>
                                <View style={style.item}>
                                    <TouchableOpacity style={style.button} onPress={handleSubmit}>
                                        <Text style={style.button_text}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                            )}
                        </Formik>
                        <View style={[style.item,{justifyContent:"center",alignItems:"center"}]}>
                            <Text style={{color:"#525464"}}>Or</Text>
                        </View>
                        <View style={style.social}>
                            <TouchableOpacity style={style.social_item}>
                                <FontAwesome5 color={"#3b5999"} size={20} name="facebook-f"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.social_item}>
                                <FontAwesome5 color={"#55acee"} size={20} name="twitter"/>
                            </TouchableOpacity>
                            <TouchableOpacity style={style.social_item}>
                                <FontAwesome5 color={"#0077B5"} size={20} name="linkedin"/>
                            </TouchableOpacity>
                        </View>
                        <View style={style.item}>
                            <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
                                <Text style={{color:"#525464"}}>Don't have an account? <Text style={{color:"#FFB19D"}}>Sign Up</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    body:{backgroundColor:"white",flex:1},
    header:{padding:15,justifyContent:"center",alignItems:"center"},
    title:{fontWeight:"700",fontSize:20,color:"#525464"},
    logo_area:{alignItems:"center",marginTop:30},
    board:{marginTop:30,paddingHorizontal:30},
    item:{marginBottom:20},
    input:{backgroundColor:"#F7F7F7",paddingVertical:10,paddingHorizontal:30,height:50,color:"black",borderWidth:1,borderColor:"#B0B0C3"},
    button:{backgroundColor:"#20C3AF",paddingVertical:20,borderRadius:5,justifyContent:"center",alignItems:"center"},
    button_text:{textAlign:"center",color:"white",fontSize:17,fontWeight:"700"},
    social:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:20
    },
    social_item:{
        padding:10,
        width:100,
        height:60,
        borderWidth:1,
        borderColor:"#E2E2E0",
        justifyContent:"center",
        alignItems:"center"
    }
})