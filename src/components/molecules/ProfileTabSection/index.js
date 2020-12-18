import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListFood, ItemListMenu } from '..';
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
const Account = () => {
    const navigation = useNavigation(); //Karena bukan page maka menggunakan useNavigation untuk berpindah ke detail food
    return (
        <View style={{ paddingHorizontal: 24, paddingVertical: 24 }}>
            <ItemListMenu text="Edit Profile" />
            <ItemListMenu text="Home Address" />
            <ItemListMenu text="Security" />
            <ItemListMenu text="Payments" />
        </View>
    )
};
const BoxFood = () => {
    const navigation = useNavigation();

    return (
        <View style={{ paddingHorizontal: 24, paddingVertical: 24 }}>
            <ItemListMenu text="Rate App" />
            <ItemListMenu text="Help Center" />
            <ItemListMenu text="Privacy & Policy" />
            <ItemListMenu text="Term & Conditions" />
        </View>
    )
};

const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'Account' },
        { key: '2', title: 'BoxFood' },
    ]);

    const renderScene = SceneMap({
        1: Account,
        2: BoxFood,
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

export default ProfileTabSection

const styles = StyleSheet.create({})
