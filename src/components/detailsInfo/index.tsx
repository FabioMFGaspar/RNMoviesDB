import React from 'react';
import {View, Text} from 'react-native';
import Styles from './styles';

type Props = {
  title: string;
  info: string;
};

// Component used inside "Details" to render all the info that requires a title
// and description
const DetailsInfo: React.FC<Props> = ({title, info}) => (
  <View style={Styles.wrapper}>
    <Text style={Styles.titleText}>{title}</Text>
    <Text style={Styles.infoText}>{info}</Text>
  </View>
);

export default DetailsInfo;
