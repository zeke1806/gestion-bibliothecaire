import React, {FC} from 'react';
import {View} from 'react-native';
import themes from '../../theme';

const Space: FC = () => (
  <View style={{height: themes.space, width: themes.space}} />
);

export default Space;
