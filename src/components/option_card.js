import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ripple from 'react-native-material-ripple';

const OptionCard = ({ data, containerStyle, textStyle, selectedItem = (item) => null }) => {
    return (
        <View style={[styles.itemContainer, containerStyle]}>
            { data.map((item, index) => (
                <Ripple key={index} onPress={() => selectedItem(item)}>
                    <Text style={[styles.itemStyle, textStyle]}>{item}</Text>
                </Ripple>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 200,
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius:3
    },
    itemStyle: {
        color: '#000',
        fontSize: 16,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
})

export default OptionCard;