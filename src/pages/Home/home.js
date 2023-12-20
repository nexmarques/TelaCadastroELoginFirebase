import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button }  from 'react-native'
import firebase from '../../services/firebaseConnection';

 export default function Home({route}){
    const navigation = useNavigation()
    
    async function logOut(){
        await firebase.auth().signOut();
        alert('Deslogado com sucesso')
        navigation.navigate('Login')
        
    }


    return(
        <View style={styles.container}>
        <Text style={styles.text} >Olá, {route.params?.user} </Text>

        <Button 
            title="Deslogar"
            onPress={logOut}
        />
    </View>
    )
 }
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10                
    },
    text: {
        fontSize: 25,     
        marginBottom: 10  
    }
})