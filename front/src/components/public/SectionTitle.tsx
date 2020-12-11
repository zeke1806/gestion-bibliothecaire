import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';
import themes from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SectionTitle: FC<{
  iconName: 'add' | 'list' | 'pencil' | 'people-sharp' | 'cash';
  text: string;
}> = ({iconName, text}) => {
  return (
    <View style={tailwind('flex-row items-center')}>
      <Ionicons name={iconName} size={themes.space * 2} />
      <Text>{text}</Text>
    </View>
  );
};

export default SectionTitle;
