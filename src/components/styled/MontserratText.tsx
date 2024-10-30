import { Text } from 'react-native';
import React from 'react';

function MontserratText({ style, ...rest }: Text['props']) {
  return <Text {...rest} style={[style, { fontFamily: 'montserrat' }]} />;
}

export default MontserratText;
