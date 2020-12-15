import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { FoodDummy1 } from '../../../assets';

const renderTabBar = props => (
    <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#020202' }}
        style={{ backgroundColor: 'white' }}
        tabStyle={{ width: 'auto' }}
        renderLabel={({ route, focused, color }) => (
            <Text
                style={{
                    fontWeight: '300',
                    color: focused ? '#020202' : '#8D92A3'
                }}>
                {route.title}
            </Text>
        )}
    />
);

//Item List Food
const NewTaste = () => {
    return (
        <View>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
        </View>

    )
};
const Popular = () => {
    return (
        <View>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
        </View>

    )
};
const Recommended = () => {
    return (
        <View>
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
            <ItemListFood image={FoodDummy1} />
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
        />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({

})
