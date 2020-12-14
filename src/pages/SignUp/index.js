import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Header, TextInput, Gap, Button } from '../../components'

const SignUp = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Register & find the best food" onBack={() => { }} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.photoBorder}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                <TextInput label="Full Name" placeholder="Input your fullname" />
                <Gap height={16} />
                <TextInput label="Email" placeholder="Input email address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Input password" />
                <Gap height={50} />
                <Button title="Continue" />
            </View>
        </View>
    )
}

export default SignUp

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
    photo: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 35
    },
    photoBorder: {
        width: 115,
        height: 115,
        borderRadius: 115,
        borderWidth: 1,
        borderColor: '#8D92A3',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    },
    photoContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#F0F0F0',
        padding: 24,
    },
    addPhoto: {
        fontSize: 14,
        color: '#8D92A3',
        textAlign: 'center'
    }
})
