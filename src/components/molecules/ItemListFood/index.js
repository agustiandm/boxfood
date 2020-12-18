import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Rating from '../Rating';

/*
TYPE:
1. Product
2. Order-Summary
3. In-Progress
4. Past-Order
*/



const ItemListFood = ({
    image,
    onPress,
    rating,
    items,
    price,
    type,
    name,
    date,
    status,
}) => {
    const renderContent = () => {
        switch (type) {
            case 'product':
                return (
                    <>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameFood}>{name}</Text>
                            <Text style={styles.priceFood}>Rp{price}</Text>
                        </View>
                        <Rating rating={rating} />
                    </>
                );
            case 'order-summary':
                return (
                    <>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameFood}>{name}</Text>
                            <Text style={styles.priceFood}>Rp{price}</Text>
                        </View>
                        <Text style={styles.items}>{items} items</Text>
                    </>
                );
            case 'in-progress':
                return (
                    <>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameFood}>{name}</Text>
                            <Text style={styles.priceFood}>
                                {items} items . {price}
                            </Text>
                        </View>
                    </>
                );
            case 'past-orders':
                return (
                    <>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameFood}>{name}</Text>
                            <Text style={styles.priceFood}>
                                {items} items . Rp{price}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.date}>{date}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                    </>
                );
            default:
                return (
                    <>
                        <View style={styles.textContainer}>
                            <Text style={styles.nameFood}>{name}</Text>
                            <Text style={styles.priceFood}>Rp{price}</Text>
                        </View>
                        <Rating rating={rating} />
                    </>
                );
        };
    };

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.foodContainer}>
                <Image style={styles.foodImage} source={image} />
                {renderContent()}
            </View>
        </TouchableOpacity >
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    foodContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        alignItems: 'center'
    },
    foodImage: {
        height: 80,
        width: 80,
        borderRadius: 10,
        marginRight: 12
    },
    textContainer: {
        flex: 1
    },
    nameFood: {
        fontSize: 16,
        fontWeight: '500',
        color: '#020202',
        paddingBottom: 5
    },
    priceFood: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3'
    },
    items: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3'
    },
    date: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#8D92A3',
        marginBottom: 4
    },
    status: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#D9435E',
        textAlign: 'right'
    },
})


// code renderContent sebelum di rubah
//     < View style = { styles.textContainer } >
//         <Text style={styles.nameFood}>Breakfast Food</Text>
// {
//     inProgress ? (
//         <Text style={styles.priceFood}>
//             {orderItems} items . {totalOrder}</Text>
//     ) : (
//             <Text style={styles.priceFood}>Rp35.000</Text>
//         )
// }
//                 </ >
//     { items && !ratings && <Text style={styles.items}>{items} items</Text>}
// {/* kalau items true dan ratings false maka munculkan {jumlah items} item */ }
// { ratings && !items && <Rating /> }
// {/* kalau ratings true dan items false maka munculkan Rating */ }