import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={{flex: 2, padding: 20}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Icon name="menu" />
        </TouchableOpacity>
        <Text style={{flex: 8}}> Hello world</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'space-between',
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'purple',
  },
});
