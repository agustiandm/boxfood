import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IcBack } from '../../../assets'

const Header = ({ title, subTitle, onBack }) => {
    return (
        <View style={styles.container}>
            {
                onBack && (
                    <TouchableOpacity activeOpacity={0.7}>
                        <View style={styles.back}>
                            <IcBack />
                        </View>
                    </TouchableOpacity>
                )
            }
            {/* Bacanya: Kalau ada props onBack maka kita akan munculkan component back nya. */}

            <View>
                <Text style={styles.title}>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingBottom: 24,
        paddingTop: 80,
        flexDirection: 'row',
        alignItems: 'center',

    },
    back: {
        padding: 16,
        marginRight: 16,
        marginLeft: -10
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        color: '#020202',
        paddingBottom: 5
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3'
    }
})
