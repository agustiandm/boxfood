import React from 'react'
import { StyleSheet, View } from 'react-native'
import { OrderEmpty } from '../../components'

const Order = () => {
    return (
        <View style={styles.page}>
            <OrderEmpty />
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
