import React from 'react'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProfileDummy } from '../../../assets'
import { getData } from '../../../utils'

const HomeProfile = () => {
    const [photo, setPhoto] = useState(ProfileDummy);
    useEffect(() => {
        getData('userProfile').then((res) => {
            setPhoto({ uri: res.profile_photo_url });
        })
    }, [])
    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.appName}>BoxFood</Text>
                <Text style={styles.desc}>Let's get someone foods</Text>
            </View>
            <Image source={photo} style={styles.profile} />
        </View>
    )
}

export default HomeProfile

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
    },
})
