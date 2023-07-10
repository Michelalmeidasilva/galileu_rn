import {FC} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useUser} from 'providers';
import DrawerItem from './DrawerItem';

type Props = {};

export const DrawerMenu: FC<Props> = () => {
  const navigation = useNavigation();
  const {user} = useUser();

  return (
    <>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            margin: 15,
            backgroundColor: 'green',
            borderRadius: 30,
            height: 60,
            width: 60,
          }}
        />

        <Text
          style={{maxWidth: 200}}
          ellipsizeMode="middle"
          lineBreakMode="middle">
          {user?.email}
        </Text>
      </View>

      <DrawerItem
        navigation={navigation}
        screen={'Home'}
        title={'Home'}
        key={'Home1'}
      />

      <DrawerItem
        navigation={navigation}
        screen={'Chat'}
        title={'Chat'}
        key={'Chat'}
      />
    </>
  );
};
