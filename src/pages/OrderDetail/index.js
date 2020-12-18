import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodDummy1 } from '../../assets'
import { Button, Gap, Header, ItemListFood, ItemValue } from '../../components'

const OrderDetail = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.page}>
                <Header
                    title="Payment"
                    subTitle="You deserve better meal"
                    onBack={() => { }}
                />
                <View style={styles.content}>
                    <Text style={styles.label}>Item Ordered</Text>
                    <ItemListFood
                        type="order-summary"
                        name="Breakfast Food"
                        image={FoodDummy1}
                        price="35.000"
                        items={1}
                    />
                    <Text style={styles.label}>Detail Transaction</Text>
                    <ItemValue label="Breakfast Food" value="Rp35.000" />
                    <ItemValue label="Driver" value="Rp25.000" />
                    <ItemValue label="Tax 10%" value="Rp3.500" />
                    <ItemValue label="Total Price" value="Rp63.500" valueColor="red" />
                </View>
                <View style={styles.content}>
                    <Text>Delivery to:</Text>
                    <ItemValue label="Name" value="Agustian DM" />
                    <ItemValue label="Phone" value="0857-1537-4449" />
                    <ItemValue label="Address" value="Perum Buana Asri" />
                    <ItemValue label="House no." value="A17/10" />
                    <ItemValue label="City" value="Karawang Timur" />
                </View>
                <View style={styles.content}>
                    <Text>Order Status:</Text>
                    <ItemValue label="#FM10000" value="Paid" valueColor="#41830F" />
                </View>
                <View style={styles.button}>
                    <Button title="Cancel My Order" color="red" onPress={() => navigation.replace('OrderSuccess')} />
                </View>
                <Gap height={50} />

            </View>
        </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#FBFBFB'
    },
    content: {
        backgroundColor: 'white',
        paddingVertical: 24,
        paddingHorizontal: 24,
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
