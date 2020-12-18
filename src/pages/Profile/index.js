import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ProfileDummy } from '../../assets'
import { ProfileTabSection } from '../../components/molecules'

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.profileDetail}>
                <View style={styles.photo}>
                    <View style={styles.photoBorder}>
                        <Image style={styles.photoContainer} source={ProfileDummy} />
                    </View>
                </View>
                <Text style={styles.name}>Agustian DM</Text>
                <Text style={styles.email}>mydm@gmail.com</Text>
            </View>
            <ProfileTabSection />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    photo: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 16
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
        padding: 24,
    },
    name: {
        fontSize: 18,
        fontWeight: '500',
        color: '#020202',
        textAlign: 'center',
        marginBottom: 5
    },
    email: {
        fontSize: 13,
        fontWeight: '500',
        color: '#8D92A3',
        textAlign: 'center',
        marginBottom: 30
    },
    profileDetail: {
        backgroundColor: 'white',
        marginBottom: 1
    }
})
