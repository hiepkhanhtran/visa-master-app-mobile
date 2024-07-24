import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PaymentScreen = () => {
    const [amount, setAmount] = useState('');

    const handlePayment = () => {
        // Process payment logic here
        alert(`Payment of ${amount} successfully made.`);
        // Navigate back or show success message
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter Amount:</Text>
            <TextInput
                style={styles.input}
                value={amount}
                onChangeText={text => setAmount(text)}
                keyboardType="numeric"
            />
            <Button
                title="Confirm Payment"
                onPress={handlePayment}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontSize: 16,
        width: '100%',
        marginBottom: 20,
    },
});

export default PaymentScreen;
