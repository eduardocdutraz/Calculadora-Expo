import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Button from './Button';

const ButtonPanel = ({ onInput, onCalculate, onClear }) => {
  const buttons = [
    ['C', '÷', 'x', '←'],
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '√'],
    ['0', '( )', '%', 'elev.'],
    ['=','.'],
   
  ];

  return (
    <View style={styles.container}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((buttonLabel, columnIndex) => (
            <Button
              key={buttonLabel}
              label={buttonLabel}
              onPress={() => {
                if (buttonLabel === 'C') {
                  onClear();
                } else if (buttonLabel === '=') {
                  onCalculate();
                } else {
                  onInput(buttonLabel);
                }
              }}
            />
          ))}
        </View>
      ))}
      {/* View adicional para centralizar e esticar o botão de igual */}
      <View style={styles.equalButtonContainer}>
        <Button
          label="="
          onPress={() => onCalculate()}
          style={styles.equalButton} // Adiciona um estilo para esticar o botão de igual
        />
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');
const buttonWidth = width / 4.1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  equalButtonContainer: {
    alignItems: 'center',
    width: '100%', 
  },
  equalButton: {
    width: '100%'
  },
});

export default ButtonPanel;
