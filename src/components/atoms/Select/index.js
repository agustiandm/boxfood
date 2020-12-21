import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Select = ({ label, value, onSelectChange }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                    selectedValue={value}
                    onValueChange={(itemValue) =>
                        onSelectChange(itemValue)
                    }
                >
                    <Picker.Item label="Karawang" value="Karawang" />
                    <Picker.Item label="Jakarta" value="Jakarta" />
                    <Picker.Item label="Bandung" value="Bandung" />
                    <Picker.Item label="Yogyakarta" value="Yogyakarta" />
                    <Picker.Item label="Subang" value="Subang" />
                    <Picker.Item label="Bekasi" value="Bekasi" />
                </Picker>
            </View>
        </View >
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: '#020202'
    },
    input: {
        // borderWidth: 0.5,
        // borderColor: '#020202',
        // borderRadius: 8,
        // padding: 10,
        // height: 50,
        marginTop: -10
    },
})
