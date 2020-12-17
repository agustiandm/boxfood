import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Rating } from '..'

const FoodCard = ({ image }) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.cardContainer}>
                <Image source={image} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.foodName}>Breakfast Food</Text>
                    <Rating />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 16
    },
    image: {
        width: 200,
        height: 180,
        resizeMode: 'cover',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    foodName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#020202',
        paddingBottom: 4
    },
    content: {
        padding: 12,
    }
})
