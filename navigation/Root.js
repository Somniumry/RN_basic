import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stacks from "./Stacks";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator screenOptions={{ headerShown: false }}>
            <Nav.Screen name="Tab" component={Tabs} />
            <Nav.Screen name="Stack" component={Stacks} />
        </Nav.Navigator>
    )
}

export default Root;