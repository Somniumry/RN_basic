import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movie from '../screens/Movie';
import Search from '../screens/Search';
import TV from '../screens/TV';

const Tab = createBottomTabNavigator();

// 탭 네비게이션 컴포넌트 렌더링
const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="movies" component={Movie} />
            <Tab.Screen name="tv" component={TV} />
            <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
    )
}

export default Tabs;