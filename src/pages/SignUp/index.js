import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Header, TextInput, Gap, Button } from '../../components'
import useForm from '../../utils/useForm'

const SignUp = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log('form:', form)
        dispatch({ type: 'SET_REGISTER', value: form });
        navigation.navigate('SignUpAddress');
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            <View style={styles.page}>
                <Header
                    title="Sign Up"
                    subTitle="Register & find the best food"
                    onBack={() => { }}
                />

                <View style={styles.container}>
                    <View style={styles.photo}>
                        <View style={styles.photoBorder}>
                            <View style={styles.photoContainer}>
                                <Text style={styles.addPhoto}>Add Photo</Text>
                            </View>
                        </View>
                    </View>
                    <TextInput
                        label="Full Name"
                        placeholder="Input your fullname"
                        value={form.name}
                        onChangeText={(value) => setForm('name', value)}
                    />
                    <Gap
                        height={16}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Input email address"
                        value={form.email}
                        onChangeText={(value) => setForm('email', value)}
                    />
                    <Gap
                        height={16}
                    />
                    <TextInput
                        label="Password"
                        placeholder="Input password"
                        secureTextEntry
                        value={form.password}
                        onChangeText={(value) => setForm('password', value)}
                    />
                    <Gap
                        height={50}
                    />
                    <Button
                        title="Continue"
                        onPress={onSubmit}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: {
        flex: 1,
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
        textAlign: 'center',
        paddingTop: 10
    }
})
