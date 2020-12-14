import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({ title, color = '#41830F', onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default Button

const styles = StyleSheet.create({
    container: (color) => ({ backgroundColor: color, padding: 18, borderRadius: 8, height: 55 }),
    text: { fontSize: 15, fontWeight: 'bold', color: 'white', textAlign: 'center' }
})
