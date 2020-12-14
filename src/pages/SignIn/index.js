import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignIn = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput label="Email" placeholder="Input email address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Input password" />
                <Gap height={50} />
                <Button title="Sign In" />
                <Gap height={12} />
                <Button title="Create new account" color='#8D92A3' onPress={() => navigation.navigate('SignUp')} />
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, flex: 1 },
})
