import React from "react";
import { Button } from "react-native";
import * as Location from 'expo-location';

const fetchLocation = props => {
    return (
        <Button title="Get Location" onPress={props.onGetLocation} />
    )
}

export function detectPosition() {
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    }, err => console.log(err));
};

// async function detectPosition(){
//     let status = await.getLocation
// }

export default fetchLocation;
