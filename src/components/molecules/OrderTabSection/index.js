import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { FoodDummy1 } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{
            backgroundColor: '#020202',
            marginLeft: 10,
        }}
        style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 0.5 }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text
                style={{
                    fontWeight: '300',
                    color: focused ? '#020202' : '#8D92A3',
                    marginLeft: 18
                }}>
                {route.title}
            </Text>
        )}
    />
);

//Item List Food
const InProgress = () => {
    const navigation = useNavigation(); //Karena bukan page maka menggunakan useNavigation untuk berpindah ke detail food
    return (
        <View style={{ paddingHorizontal: 24 }}>
            <ItemListFood
                type="in-progress"
                name="Breakfast Food"
                image={FoodDummy1}
                price="35.000"
                items={1}
                onPress={() => navigation.navigate('OrderDetail')}
            />
        </View>
    )
};
const PastOrder = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingHorizontal: 24 }}>
            <ItemListFood
                type="past-orders"
                name="Breakfast Food"
                image={FoodDummy1}
                price="35.000"
                items={1}
                date="Aug 12, 14:05"
                onPress={() => navigation.navigate('OrderDetail')}
            />
            <ItemListFood
                type="past-orders"
                name="Breakfast Food"
                image={FoodDummy1}
                price="35.000"
                items={1}
                date="Aug 12, 14:00"
                status="Cancelled"
                onPress={() => navigation.navigate('OrderDetail')}
            />
        </View>
    )
};

const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Order' },
    ]);

    const renderScene = SceneMap({
        1: InProgress,
        2: PastOrder,
    });

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ backgroundColor: 'white' }}
        />
    )
}

export default OrderTabSection

const styles = StyleSheet.create({})
