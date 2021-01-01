import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View,Platform } from "react-native";
import Button from "../Components/Button"
import AppText from "../Components/AppText"

export default function WelcomeScreen({navigation}) {
    return (
        <ImageBackground blurRadius={10} source={require("../assets/background.jpg")} style={styles.container}>
            <View style={{position:"absolute",top:50,alignItems:"center"}}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />
            <AppText style={{fontWeight:"600",marginVertical:15}}>Sell What You Don't Need</AppText>
            </View>
            <View style={styles.btnContainers}>
            <Button style={{backgroundColor:"#e0545f"}} text="Login" onPress={()=>navigation.navigate("Login")}/>
            <Button style={{backgroundColor:"#6cc5bd",marginTop:15}} text="Register" onPress={()=>navigation.navigate("Register")}/>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "flex-end",
      alignItems:"center"
    },
    btnContainers:{
      width:"100%",
      paddingBottom:25,
      paddingHorizontal:20
    },
    logo:{
      width:100,
      height:100
    }
  })