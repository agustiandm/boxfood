import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Il_SuccessOrder } from '../../assets'
import { Button, Gap } from '../../components'
const OrderSuccess = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Il_SuccessOrder />
            <Gap height={30} />
            <Text style={styles.title}>You’ve Made Order</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Just stay at home while we are</Text>
            <Text style={styles.subTitle}>preparing your best foods</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Order Other Foods"
                    onPress={() => navigation.replace('MainApp')}
                />
                <Gap height={10} />
                <Button
                    title="View My Order"
                    onPress={() => navigation.replace()}
                    color="#8D92A3"
                />
            </View>
        </View>
    )
}

export default OrderSuccess

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontSize: 20, color: '#020202'
    },
    subTitle: {
        fontSize: 16, color: '#8D92A3'
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 80,
    }
})
