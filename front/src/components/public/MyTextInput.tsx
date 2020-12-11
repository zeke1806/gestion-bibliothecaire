import React, {FC} from 'react';
import {TextInput} from 'react-native';
import tailwind from 'tailwind-rn';

const MyTextInput: FC<{
  placeholder: string;
  value: string;
  keyboardType?: 'default' | 'numeric';
  onChange: (value: string) => void;
}> = ({placeholder, value, keyboardType, onChange}) => {
  const _keyboardType = keyboardType || 'default';
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      style={tailwind(
        'border-2 rounded-md border-gray-500 border-opacity-50 pl-4 m-1',
      )}
      keyboardType={_keyboardType}
      onChangeText={onChange}
    />
  );
};

export default MyTextInput;
