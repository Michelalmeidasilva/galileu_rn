import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  title: string;
  screen: string;
  navigation: NavigationProp<any>;
};

const DrawerItem: FC<Props> = ({title, screen, navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate(screen)}>
          <Text>{title}</Text>

          <Icon name="menu" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
});

export default DrawerItem;
