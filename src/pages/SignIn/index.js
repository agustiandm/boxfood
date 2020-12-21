import Axios from 'axios'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import useForm from '../../utils/useForm'
import { showMessage, hideMessage } from "react-native-flash-message";


const SignIn = ({ navigation }) => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // //State ini digunakan untuk menjadi value dalam input text

    const [form, setForm] = useForm({
        email: '',
        password: ''
    });

    const onSubmit = () => {
        console.log('form:', form);
        Axios.post('http://foodmarket-backend.buildwithangga.id/api/login', form)
            .then(res => {
                console.log('success:', res);
                showToast('Sign In Success', 'success')
            })
            .catch(err => {
                console.log('error:', err.response.data.message);
                showToast(err?.response?.data?.message)
            })
    };

    const showToast = (message, type) => {
        showMessage({
            message,
            type: type === 'success' ? 'success' : 'danger',
            backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
        });
    }

    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput
                    label="Email"
                    placeholder="Input email address"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)}

                // onChangeText={(value) => setEmail(value)} //setiap kita merubah text input, maka akan dikirimkan value ke setEmail sehingga email merubah value sesuai yg kita inginkan
                />
                <Gap height={16} />
                <TextInput
                    label="Password"
                    placeholder="Input password"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={50} />
                <Button title="Sign In" onPress={onSubmit} />
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
