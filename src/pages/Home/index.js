import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../assets'

const Home = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName}>BoxFood</Text>
                    <Text style={styles.desc}>Let's get someone foods</Text>
                </View>
                <Image source={ProfileDummy} style={styles.profile} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 80,
        paddingBottom: 24,
        paddingHorizontal: 24,
        backgroundColor: 'white'
    },
    profile: {
        height: 50,
        width: 50,
        borderRadius: 10
    },
    appName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#020202',
        paddingBottom: 5
    },
    desc: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3'
    }
})
