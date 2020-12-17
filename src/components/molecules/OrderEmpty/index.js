import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Il_OrderEmpty } from '../../../assets'
import { Button, Gap } from '../../atoms'


const OrderEmpty = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <Il_OrderEmpty />
            <Gap height={30} />
            <Text style={styles.title}>Ouch! Hungry</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Seems like you have not</Text>
            <Text style={styles.subTitle}>ordered any food yet</Text>
            <Gap height={30} />
            <View style={styles.buttonContainer}>
                <Button
                    title="Find Foods"
                    onPress={() => navigation.replace('MainApp')}
                />
            </View>
        </View>
    )
}

export default OrderEmpty

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'

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
