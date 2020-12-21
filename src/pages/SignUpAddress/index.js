import Axios from 'axios'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import { useForm, showMessage } from '../../utils'


const SignUpAddress = ({ navigation }) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Karawang'
    });

    const dispatch = useDispatch();
    const { registerReducer, photoReducer } = useSelector(state => state)

    const onSubmit = () => {
        console.log('form:', form);
        const data = {
            ...form,
            ...registerReducer
        }
        console.log('registerReducer:', data)
        Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
            .then((res) => {
                console.log('data success:', res.data);
                if (photoReducer.isUpload) {

                    const photoForUpload = new FormData();
                    photoForUpload.append('file', photoReducer);
                    Axios.post('http://foodmarket-backend.buildwithangga.id/api/user/photo', photoForUpload, {
                        headers: {
                            'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
                            'Content-Type': 'multipart/form-data',
                        }
                    })
                        .then((resUpload) => {
                            console.log('success upload:', resUpload)
                        })
                        .catch((err) => {
                            showMessage(
                                err?.response?.message || 'Uplaod photo tidak berhasil',
                            );
                        });
                }
                dispatch({ type: 'SET_LOADING', value: false });
                showMessage('Register Success', 'success');
                navigation.replace('SignUpSuccess');
            }).catch((err) => {
                dispatch({ type: 'SET_LOADING', value: false });
                showMessage(err?.response?.data?.message);
            });
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)}
                    />
                    <Gap
                        height={16}
                    />
                    <TextInput
                        label="Address"
                        placeholder="Input your address"
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)}
                    />
                    <Gap
                        height={16}
                    />
                    <TextInput
                        label="House No."
                        placeholder="Input your house number"
                        value={form.houseNumber}
                        onChangeText={(value) => setForm('houseNumber', value)}
                    />
                    <Gap
                        height={16}
                    />

                    <Select
                        label="City"
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)}
                    />

                    <Gap
                        height={50}
                    />
                    <Button
                        title="Sign Up Now"
                        onPress={onSubmit}
                    />
                </View>
            </View>
        </ScrollView>
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
        paddingTop: 16,
        flex: 1
    },
})
