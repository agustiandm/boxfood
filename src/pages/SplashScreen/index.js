import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import { Logo } from '../../assets';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout (() => {
            navigation.replace('SignIn');
        }, 2000);
    }, []);

    return (
        <View style={{ backgroundColor: '#41830F', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Logo />
            <Text style={{ fontSize: 32, color: '#FFFFFF', marginVertical: 17, fontWeight: '500' }}>BoxFood</Text>
        </View>
    )
};

export default SplashScreen;