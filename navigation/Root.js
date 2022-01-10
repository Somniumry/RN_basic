import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Stacks from "./Stacks";
import Tabs from "./Tabs";

const Nav = createNativeStackNavigator();

const Root = () => {
    return (
        <Nav.Navigator screenOptions={{ headerShown: false }}>
            {/* Tab, Stack 위치에 따라 처음 렌더되는 화면이 달라짐 */}
            <Nav.Screen name="Tab" component={Tabs} />
            <Nav.Screen name="Stack" component={Stacks} />
        </Nav.Navigator>
    )
}

export default Root;