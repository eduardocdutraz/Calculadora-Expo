import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonPanel from './components/ButtonPanel';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');
 
  

  const handleInput = (input) => {
    if (input === '←') {
      setDisplayValue(prev => prev.slice(0, -1)); 
    }else if (input === 'x') { 
    setDisplayValue(prev => prev +'*' );
    }else if (input === '÷'){
      setDisplayValue(prev => prev +'/');
    }else if (input === 'elev.') { 
      setDisplayValue(prev => prev +'**' );
    }else if (input === '%'){
      calculatePercentage();
    }else if (input === '√') { 
      setDisplayValue(prev => prev +'**0.5' );
    }else if (input === '( )') {
      setDisplayValue((prev) => {
      
        const lastCharIsNumber = /\d$/.test(prev);
       
        return lastCharIsNumber ? prev + ')' : prev + '(';
      });
    }else {
      setDisplayValue(prev => prev + input);
    }
  };

 const calculateResult = () => {
  try {
    const result = eval(displayValue);
    if (isNaN(result) || !isFinite(result)) {
      
      setDisplayValue('Undefined');
    } else {
      setDisplayValue(result.toString());
    }
  } catch (e) {
    setDisplayValue('');
    setOpenParentheses(false); 

  }
};
const calculatePercentage = () => { //Função para calcular a porcentagem 
    try {
      if (!displayValue.trim()) return; 
      const expression = displayValue.trim();
      const result = eval(expression) / 100;
      if (isNaN(result) || !isFinite(result)) {
        setDisplayValue('Undefined');
      } else {
        setDisplayValue(result.toString());
      }
    } catch (e) {
      setDisplayValue('Erro');
    }
  };

  const clearDisplay = () => setDisplayValue('');

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <ButtonPanel onInput={handleInput} onCalculate={calculateResult} onClear={clearDisplay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212', 
  },
  displayContainer: {
    width: '90%',
    height: '10%',
    marginBottom: 60,
    padding: 0,
    backgroundColor: '#121212', // Fundo do display
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#2C79D4', 
    fontSize: 50,
  },
});
