import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tailwind from 'tailwind-rn';

const PageTitle: FC<{
  text: string;
}> = ({text}) => {
  return (
    <View style={tailwind('flex-row justify-center')}>
      <Text style={tailwind('text-3xl text-gray-700')}>{text}</Text>
    </View>
  );
};

export default PageTitle;
