import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStar, IcStarOff } from '../../../assets'


const Rating = () => {
    return (
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                <IcStar />
                <IcStar />
                <IcStar />
                <IcStar />
                <IcStarOff />
            </View>
            <Text>4.0</Text>
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    starContainer: {
        flexDirection: 'row'
    },
    ratingContainer: {
        flexDirection: 'row'
    },
})
