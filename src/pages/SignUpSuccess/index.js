import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Il_SignUpSUccess } from '../../assets'
import { Button, Gap } from '../../components'

const SignUpSuccess = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Il_SignUpSUccess />
            <Gap height={30} />
            <Text style={styles.title}>Yeay! Completed</Text>
            <Gap height={6} />
            <Text style={styles.subTitle}>Now you are able to order</Text>
            <Text style={styles.subTitle}>some foods as a self-reward</Text>
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

export default SignUpSuccess

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
