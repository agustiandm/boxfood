import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IcStar, IcStarOff } from '../../../assets'

const FoodCard = ({ image }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.text}>Breakfast Food</Text>
                <View style={styles.ratingContainer}>
                    <View style={styles.starContainer}>
                        <IcStar />
                        <IcStar />
                        <IcStar />
                        <IcStar />
                        <IcStarOff />
                    </View>
                    <Text>4</Text>
                </View>
            </View>
        </View>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    cardContainer: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
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
    text: {
        fontSize: 16,
        fontWeight: '500',
        color: '#020202'
    },
    starContainer: {
        flexDirection: 'row'
    },
    ratingContainer: {
        flexDirection: 'row'
    },
    content: {
        padding: 12
    }
})
