import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native"
import { style } from "./style";

type Props =  TouchableOpacityProps &{
    title: string;
}

export function Button({ title, ...rest }: Props){

    return(
        <TouchableOpacity activeOpacity={0.7} style={style.button} {...rest}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
}