import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FoodDummy1 } from '../../../assets';
import Rating from '../Rating';


const ItemListFood = ({ image }) => {
    return (
        <View style={styles.foodContainer}>
            <Image style={styles.foodImage} source={image} />
            <View style={styles.textContainer}>
                <Text style={styles.nameFood}>Breakfast Food</Text>
                <Text style={styles.priceFood}>Rp35.000</Text>
            </View>
            <Rating />
        </View>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    foodContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
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
    }
})
