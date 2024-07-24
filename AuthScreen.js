import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AuthScreen = () => {
    const handleLogin = () => {
        // Logic for handling login
    };

    const handleRegister = () => {
        // Logic for handling registration
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to VisaMaster App</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
            />
            <Button
                title="Login"
                onPress={handleLogin}
            />
            <Button
                title="Register"
                onPress={handleRegister}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
});

export default AuthScreen;
