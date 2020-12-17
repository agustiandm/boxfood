import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Rating from '../Rating';

const ItemListFood = ({ image, onPress, items, ratings }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.foodContainer}>
                <Image style={styles.foodImage} source={image} />
                <View style={styles.textContainer}>
                    <Text style={styles.nameFood}>Breakfast Food</Text>
                    <Text style={styles.priceFood}>Rp35.000</Text>
                </View>
                {items && !ratings && <Text style={styles.items}>{items} items</Text>}
                {/* kalau items true dan ratings false maka munculkan {jumlah items} item */}
                {ratings && !items && <Rating />}
                {/* kalau ratings true dan items false maka munculkan Rating */}
            </View>
        </TouchableOpacity >
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    foodContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        alignItems: 'center'
    },
    foodImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 12
    },
    textContainer: {
        flex: 1
    },
    nameFood: {
        fontSize: 16,
        fontWeight: '500',
        color: '#020202',
        paddingBottom: 5
    },
    priceFood: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3'
    },
    items: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3'
    }
})
