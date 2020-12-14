import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Select = ({ label }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input}>
                <Picker
                // selectedValue={this.state.language}
                // onValueChange={(itemValue, itemIndex) =>
                // this.{ language: itemValue })
                // }
                >
                    <Picker.Item label="Karawang" value="Karawang" />
                    <Picker.Item label="Jakarta" value="Jakarta" />
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
        marginTop: -75
    },
})
