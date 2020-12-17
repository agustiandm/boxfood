import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { FoodDummy1 } from '../../assets'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'

const Home = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.page}>
                <View>
                    <HomeProfile />
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodCardContainer}>
                            <Gap width={16} />
                            <FoodCard image={FoodDummy1} />
                            <FoodCard image={FoodDummy1} />
                            <FoodCard image={FoodDummy1} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.tabContainer}>
                    <HomeTabSection />
                </View>
            </View>
        </ScrollView>
    );
};

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    },

    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 16
    },
    tabContainer: {
        flex: 1
    }
})
