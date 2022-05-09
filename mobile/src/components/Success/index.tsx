import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

export function Success() {
    return (
        <View style={styles.container}>
            <Image source={successImg} style={styles.image} />
            <Text style={styles.title}>Thanks for you feedback</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>Send another one</Text>
            </TouchableOpacity>

            <Copyright />
        </View>
    );
}
