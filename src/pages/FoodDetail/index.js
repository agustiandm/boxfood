import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { FoodDummy1, IcBackWhite } from '../../assets'
import { Button, Counter, Rating } from '../../components'

const FoodDetail = () => {
    return (
        <View style={styles.page}>
            {/* <View backgroundColor='grey' borderRadius={50}> */}
            <ImageBackground source={FoodDummy1} style={styles.image}>
                <TouchableOpacity style={styles.back} activeOpacity={0.7}>
                    <IcBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            {/* </View> */}
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <View style={styles.productContainer}>
                        <View >
                            <Text style={styles.foodName}>Breakfast Food</Text>
                            <Rating />
                        </View>
                        <Counter />
                    </View>
                    <Text style={styles.descFood}>
                        Makanan khas Karawang yang cukup sering
                        dipesan oleh anak muda dengan pola makan
                        yang cukup tinggi dengan mengutamakan
                        diet yang sehat dan teratur.
                    </Text>
                    <Text style={styles.label}>Ingredients:</Text>
                    <Text style={styles.descFood} >Seledri, telur, blueberry, madu.</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.totalLabel}>Total Price:</Text>
                        <Text style={styles.priceLabel}>Rp35.000</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Order Now" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    image: {
        height: 500,
        paddingTop: 60,
        paddingLeft: 24,
        borderRadius: 50,
    },
    back: {
        height: 35,
        width: 35,
        backgroundColor: 'grey',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        marginTop: -30,
        backgroundColor: 'white',
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1
    },
    mainContent: {
        flex: 1
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    foodName: {
        fontSize: 16, fontWeight: '500', color: '#020202', marginBottom: 3
    },
    descFood: {
        fontSize: 14, fontWeight: 'normal', color: '#8D92A3', marginBottom: 15
    },
    label: {
        fontSize: 14,
        color: '#020202',
        marginBottom: 4
    },
    footer: {
        flexDirection: 'row',
        marginBottom: 35,
        marginTop: 16
    },
    priceContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    totalLabel: {
        fontSize: 13, color: '#8D92A3', paddingBottom: 4
    },
    priceLabel: {
        fontSize: 16, color: 'red'
    },
    button: {
        height: 50,
        width: 165
    }
})
