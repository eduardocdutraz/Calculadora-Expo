import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonWidth = width / 4.1; 

const Button = ({ label, onPress }) => {
  const isOperator = ['+', '-', 'x', '←', '÷','C','√','%','elev.','( )','.'].includes(label);
  const isEqual = label === '=';
  const backgroundColor = isOperator ? '#000000' : (isEqual ? '#130840' :'#333232');
  const textColor = '#ABABAB'; 
  const buttonStyle = isEqual ? { flex: 1 } : { width: buttonWidth - 10 };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        buttonStyle 
      ]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={[styles.text, { color: textColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: buttonWidth / 3,
    height: buttonWidth - 10, 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 30, 
    fontWeight: 'italic', 
    

  },
});

export default Button;
