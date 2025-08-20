import { Alert, TextInput, TextInputProps } from "react-native";
import { useState } from "react";
import { styles } from "./styles";

export function Input({...rest}: TextInputProps) {
    const [isFocused, setIsFocused] = useState(false);

    const handleTextChange = (text: string) => {
        if(text.length <= 0) {
            Alert.alert('Atenção', `O campo ${text} não pode estar vazio`);
        }
    }

    return(
        <TextInput style={[styles.input, isFocused && styles.inputFocused]} onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} {...rest}/>
    );
}