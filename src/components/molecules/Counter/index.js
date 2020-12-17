import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcMin, IcPlus } from '../../../assets'

const Counter = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <IcPlus />
            </TouchableOpacity>
            <Text style={styles.numberLabel}>1</Text>
            <TouchableOpacity>
                <IcMin />
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    numberLabel: {
        fontSize: 16,
        fontWeight: '500',
        color: '#020202',
        marginHorizontal: 10
    }

})
