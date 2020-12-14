import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'

const SignUpAddress = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header
                title="Address"
                subTitle="Make sure it’s valid"
                onBack={() => { }}
            />
            <View style={styles.container}>
                <TextInput
                    label="Phone No."
                    placeholder="Input your phone number"
                />
                <Gap
                    height={16}
                />
                <TextInput
                    label="Address"
                    placeholder="Input your address"
                />
                <Gap
                    height={16}
                />
                <TextInput
                    label="House No."
                    placeholder="Input your house number"
                />
                <Gap
                    height={16}
                />

                <Select
                    label="City"
                />

                <Gap
                    height={50}
                />
                <Button
                    title="Sign Up Now" onPress={() => navigation.replace('SignUpSuccess')}
                />
            </View>
        </View>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        flex: 1
    },
})
