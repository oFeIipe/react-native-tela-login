import { Text, View, StyleSheet, Alert,  Image } from 'react-native';
import { Button } from '../components/button';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
export default function Dashboard() {
    const params = useLocalSearchParams();
    const { name = '', email = '' } = params as { name: string; email: string };

    const [showImage, setShowImage] = useState(false);
    const message = (msg: string) => {
        Alert.alert(`${msg} ${name}!`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Olá {name}</Text>
            <Button title='Voltar' onPress={() => router.back()} />
            <Button title='Mostrar alerta' onPress={() => message('Olá')} />
            <Button title={!showImage ? 'Mostrar imagem' : 'Esconder imagem'} onPress={() => setShowImage(!showImage)
                } />
                {showImage && (
                    <Image source={require('@/assets/images/img.png')} style={{
                        width: 100, height: 100, borderRadius: 10, marginTop: 20
                    }} />
                )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});