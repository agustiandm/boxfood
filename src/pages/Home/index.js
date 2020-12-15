import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodDummy1, ProfileDummy } from '../../assets'
import Gap from '../../components/atoms/Gap'
import FoodCard from '../../components/molecules/FoodCard'

const Home = () => {
    return (
        <View >
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName}>BoxFood</Text>
                    <Text style={styles.desc}>Let's get someone foods</Text>
                </View>
                <Image source={ProfileDummy} style={styles.profile} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.foodCardContainer}>
                    <Gap width={16} />
                    <FoodCard image={FoodDummy1} />
                    <FoodCard image={FoodDummy1} />
                    <FoodCard image={FoodDummy1} />
                </View>
            </ScrollView>
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
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginTop: 16
    }
})
