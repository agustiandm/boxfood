import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = ({ label, placeholder, ...restProps }) => {
    //titik tiga pada props, artinya menyiapkan props yang tidak didefinisikan secara ekplisit untuk disimpan di props ini
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN style={styles.input} placeholder={placeholder} {...restProps} />
        </View>
    )
}

export default TextInput


const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#020202'
    },
    input: {
        borderWidth: 0.5,
        borderColor: '#020202',
        borderRadius: 8,
        padding: 10,
        height: 50,
        marginTop: 5
    },
})
