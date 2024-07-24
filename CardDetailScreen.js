import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CardDetailScreen = () => {
    const [cardInfo, setCardInfo] = useState(null);

    const readCardInformation = () => {
        // Logic to read card information
        setCardInfo({
            accountNumber: '1234567890',
            cardholderName: 'John Doe',
            openDate: '01/2023',
        });
    };

    return (
        <View style={styles.container}>
            {cardInfo ? (
                <View>
                    <Text style={styles.label}>Account Number:</Text>
                    <Text>{cardInfo.accountNumber}</Text>
                    <Text style={styles.label}>Cardholder Name:</Text>
                    <Text>{cardInfo.cardholderName}</Text>
                    <Text style={styles.label}>Open Date:</Text>
                    <Text>{cardInfo.openDate}</Text>
                    <Button
                        title="Make Payment"
                        onPress={() => {} /* Navigate to payment screen */}
                    />
                </View>
            ) : (
                <View>
                    <Text>Scan your card to read information</Text>
                    <Button
                        title="Read Card"
                        onPress={readCardInformation}
                    />
                </View>
            )}
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
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default CardDetailScreen;
