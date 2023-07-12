import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.body}>
      <View style={styles.avatar} />

      <Text style={{padding: 12}}>Michel Almeida</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{padding: 12}}>Usage :</Text>
        <View style={{backgroundColor: 'grey', width: 70, height: 8}} />
        <View style={{backgroundColor: 'white', width: 30, height: 8}} />
        <Text style={{padding: 12}}>66%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'grey',
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  body: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyItens: 'center',
  },
});

export {ProfileScreen};
