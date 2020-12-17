import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Header, ItemListFood, ItemValue } from '../../components'

const OrderSummary = () => {
    return (
        <View style={styles.page}>
            <Header
                title="Payment"
                subTitle="You deserve better meal"
                onBack={() => { }}
            />
            <View style={styles.content}>
                <Text style={styles.label}>Item Ordered</Text>
                <ItemListFood image={FoodDummy1} items={1} />
                <Text style={styles.label}>Detail Transaction</Text>
                <ItemValue label="Breakfast Food" value="Rp35.000" />
                <ItemValue label="Driver" value="Rp25.000" />
                <ItemValue label="Tax 10%" value="Rp3.500" />
                <ItemValue label="Total Price" value="Rp63.500" />
            </View>
            <View style={styles.content}>
                <Text>Delivery to:</Text>
                <ItemValue label="Name" value="Agustian DM" />
                <ItemValue label="Phone" value="0857-1537-4449" />
                <ItemValue label="Address" value="Perum Buana Asri" />
                <ItemValue label="House no." value="A17/10" />
                <ItemValue label="City" value="Karawang Timur" />
            </View>
            <View style={styles.button}>
                <Button title="Checkout Now" />
            </View>

        </View>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FBFBFB'
    },
    content: {
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 16,
        marginTop: 16
    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#020202',
        marginVertical: 8
    },
    button: {
        marginHorizontal: 24,
        marginTop: 50,
    }
})
