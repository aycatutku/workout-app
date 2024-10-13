import {Button, Text, View} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {useEffect} from "react";

export default function TestScreen({navigation}:NativeStackHeaderProps) {

    useEffect(() => {
        console.log("Rending Test Screen");

        return () => console.log("Unmounting Test Screen")
    }, []);

    return (
        <View>
            <Text>Planner Screen</Text>
            <Button title={"Go to Home"} onPress={()=>navigation.navigate("Home")}/>
        </View>
    )
}
