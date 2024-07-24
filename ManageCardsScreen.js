import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ManageCardsScreen = () => {
    const [cards, setCards] = useState([
        { id: '1', cardNumber: '1234 5678 9101 1121' },
        { id: '2', cardNumber: '2345 6789 1011 2131' },
    ]);

    const deleteCard = (id) => {
        const updatedCards = cards.filter(card => card.id !== id);
        setCards(updatedCards);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cards}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.cardItem}>
                        <Text style={styles.cardNumber}>{item.cardNumber}</Text>
                        <Button
                            title="Delete"
                            onPress={() => deleteCard(item.id)}
                        />
                    </View>
                )}
            />
            <Button
                title="Add New Card"
                onPress={() => {} /* Navigate to add card screen */}
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
    cardItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '100%',
    },
    cardNumber: {
        fontSize: 16,
    },
});

export default ManageCardsScreen;
