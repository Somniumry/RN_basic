import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Movie = ({ navigation: { navigate } }) => {
    return (
        <TouchableOpacity
            onPress={() => navigate('Stack', {screen: "One"})}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "black", fontSize: 50 }}>Movie</Text>
        </TouchableOpacity>
    )
}

export default Movie;

// 현재 Movie라는 텍스트를 TouchableOpacity로 감싸서 글자 터치 가능
// 네비게이션 -> 네비게이션 이동 시 이동하려는 네비게이터 이름과, 스크린 이름을 명시한다.  navigate('Stack', {screen: "One"})