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
const NewTaste = () => {
    const navigation = useNavigation(); //Karena bukan page maka menggunakan useNavigation untuk berpindah ke detail food
    return (
        <View>
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
        </View>
    )
};
const Popular = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
        </View>
    )
};
const Recommended = () => {
    const navigation = useNavigation();

    return (
        <View>
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
            <ItemListFood image={FoodDummy1} onPress={() => navigation.navigate('FoodDetail')} />
        </View>
    )
};

const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);

    const renderScene = SceneMap({
        1: NewTaste,
        2: Popular,
        3: Recommended,
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

export default HomeTabSection

const styles = StyleSheet.create({

})
