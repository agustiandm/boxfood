import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ItemValue = ({ label, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 2.5
    },
    label: { fontSize: 14, color: '#8D92A3' },
    value: { fontSize: 14, color: '#020202' },
})
