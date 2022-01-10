import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Two")}>
        <Text style={{ color: "black", fontSize: 35 }}>go to Two</Text>
    </TouchableOpacity>
);

const ScreenTwo = ({ navigation: { navigate } }) => (
    <TouchableOpacity onPress={() => navigate("Three")}>
        <Text style={{ color: "black", fontSize: 35 }}>Two</Text>
    </TouchableOpacity>
);

const ScreenThree = ({ navigation: { goBack } }) => (
    <TouchableOpacity onPress={() => goBack()}>
        <Text style={{ color: "black", fontSize: 35 }}>Three</Text>
    </TouchableOpacity>
);

const Stacks = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="One" component={ScreenOne} />
            <Stack.Screen name="Two" component={ScreenTwo} />
            <Stack.Screen name="Three" component={ScreenThree} />
        </Stack.Navigator>
    )
}

export default Stacks;