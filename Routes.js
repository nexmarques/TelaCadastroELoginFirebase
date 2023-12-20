import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'

import Home from "./src/pages/Home/home";
import Cadastro from "./src/pages/Cadastro/cadastro";
import Login from "./src/pages/Login/login";

export default function Routes(){

    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name='Cadastro'
                    component={Cadastro}
                />

                <Stack.Screen 
                    name='Login'
                    component={Login}
                />

                <Stack.Screen 
                    name='Home'
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
       
}
