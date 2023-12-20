import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from '../../services/firebaseConnection'
import { useNavigation } from '@react-navigation/native';


export default function Cadastro() {
  const [email,setEmail] = useState()
  const [senha, setSenha] = useState()
  const navigation = useNavigation()   

  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((value)=> {
        alert('Cadastro finalizado com sucesso')
        navigation.navigate('Home', {user: value.user.email} )
    })
    .catch((error) => {
      alert('Ops!! Houve um erro')
      return;
    })
    setEmail('')
    setSenha('')
  }

  return (
    <View style={styles.container}>     

      <Text style={{fontSize: 20, fontWeight: 'bold'}} >Email: </Text>
      <TextInput 
        onChangeText={(email) => setEmail(email) }
        style={styles.input}
        value={email}
      /> 

      <Text style={{fontSize: 20, fontWeight: 'bold'}} >Senha:</Text>
      <TextInput 
        onChangeText={(senha) => setSenha(senha) }
        style={styles.input}
        value={senha}
      /> 

      <Button 
        title='Cadastrar'
        onPress={cadastrar}
      />

      <Button 
        title='Já tenho uma conta'
        onPress={() => navigation.navigate('Login')}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5
  },
  input:{
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
    marginBottom: 10,
    fontSize: 17,
    height: 45    
  }
});
