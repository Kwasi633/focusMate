import React, {useEffect, useState, useRef} from 'react';
import {Text, View, Image} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import styles from '../styles/loadScreenStyles';

const LoadScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      setMounted(true);
    }

    return () => {
      setMounted(false);
      clearTimeout(timerRef.current);
    };
  }, [isFocused]);

  useEffect(() => {
    if (mounted) {
      timerRef.current = setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }

    return () => clearTimeout(timerRef.current);
  }, [mounted, navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../images/fmLogo.jpg')} style={styles.logo} />

      <Text style={styles.welcome}>focusMate</Text>
    </View>
  );
};

export default LoadScreen;
