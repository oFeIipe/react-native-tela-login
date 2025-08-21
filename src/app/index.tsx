import { View, Text, StyleSheet, KeyboardAvoidingView, BackHandler, Alert } from 'react-native';
import { useState } from 'react';
import { Button } from '../components/button';
import { Input } from '../components/input';

import { router } from 'expo-router';

export default function Index() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleNext = () =>{
        if(name.length <= 0 || email.length <= 0) {
            Alert.alert('Atenção', 'Preencha todos os campos');
            return;
        }
        router.navigate({
            pathname: '/dashboard',
            params: { 
                name, 
                email 
            }
        });
    }

    const handleBackHandler = () =>{
        Alert.alert('Atenção', 'Você tem certeza que deseja sair?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Sair',
                    style: 'destructive',
                    onPress: () => BackHandler.exitApp()
                }
            ]
        )
    }

    return(
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
            <Text style={styles.topTitle}>Login</Text>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Bem vindo!
                </Text>
                <Input placeholder='E-mail' value = {email} onChangeText={setEmail}/>
                <Input placeholder='Senha' value = {name} onChangeText={setName}/>
                <View style={styles.botoes}>
                    <Button title='Entrar'  activeOpacity={0.3} onPress={handleNext}/> 
                    <Button title='Sair' activeOpacity={0.3} onPress={handleBackHandler}/>
                </View>
                <Text style={styles.cadastroText}onPress={() => {
                    router.navigate('./cadastro')
                }
                }>É novo? Cadastre-se</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        gap: 20
    },
     topTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        backgroundColor: 'transform'
    },
    botoes:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        gap: 11
    },
    cadastroText: {
        alignSelf: 'flex-start',
        marginLeft: 28,
        fontWeight: '800',
        borderBottomWidth: 2
    }
});