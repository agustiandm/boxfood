import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { Button, Gap, Header, TextInput } from '../../components'
import useForm from '../../utils/useForm'
import ImagePicker from 'react-native-image-picker';
import { showMessage } from '../../utils'
import { useState } from 'react'


const SignUp = ({ navigation }) => {
    const addImageProfile = () => {
        ImagePicker.launchImageLibrary(
            {
                quality: 0.5,
                maxWidth: 200,
                maxHeight: 200
            },
            (response) => {
                console.log('Response = ', response);

                if (response.didCancel || response.error) {
                    showMessage('Empty picker image')
                } else {
                    const source = { uri: response.uri };
                    const dataImage = {
                        uri: response.uri,
                        type: response.type,
                        name: response.fileName
                    };
                    setPhoto(source);
                    dispatch({ type: 'SET_PHOTO', value: dataImage });
                    dispatch({ type: 'SET_UPLOAD_STATUS', value: true });
                }
            });
    };

    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const [photo, setPhoto] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        console.log('form:', form)
        dispatch({ type: 'SET_REGISTER', value: form });
        navigation.navigate('SignUpAddress');
    };

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
                        <TouchableOpacity onPress={addImageProfile}>
                            <View style={styles.photoBorder}>
                                {photo ? (
                                    <Image source={photo} style={styles.photoContainer} />
                                ) : (
                                        <View style={styles.photoContainer}>
                                            <Text style={styles.addPhoto}>Add Photo</Text>
                                        </View>
                                    )}
                            </View>
                        </TouchableOpacity>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    addPhoto: {
        fontSize: 15,
        color: '#8D92A3',
        textAlign: 'center',
        paddingTop: 10
    }
})
