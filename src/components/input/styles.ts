import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input:{
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 15,
        width: "90%",
        height: 60,
        borderWidth: 0.5,
        borderColor: '#cccccc',
        fontSize: 16,
    },
    inputFocused:{
        borderColor: '#6200ee',
        borderWidth: 1,
        boxShadow: '2px 2px 20px rgba(98, 0, 238, 0.5)',
    }
});