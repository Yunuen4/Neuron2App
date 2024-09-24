import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Definimos las clases Neurona y AdminNeurona
class Neurona {
  constructor(id, voltaje, posicion_x, posicion_y, red, green, blue) {
    this.id = id;
    this.voltaje = voltaje;
    this.posicion_x = posicion_x;
    this.posicion_y = posicion_y;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  print() {
    return `Neurona ID: ${this.id}\nVoltaje: ${this.voltaje}\nPosición X: ${this.posicion_x}\nPosición Y: ${this.posicion_y}\nColor RGB: (${this.red}, ${this.green}, ${this.blue})`;
  }
}

class AdminNeurona {
  constructor() {
    this.neuronas = [];
  }

  agregar_inicio(neurona) {
    this.neuronas.unshift(neurona);
  }

  agregar_final(neurona) {
    this.neuronas.push(neurona);
  }

  mostrar() {
    return this.neuronas.map((neurona) => neurona.print()).join("\n\n");
  }
}

// Creamos el componente principal
const App = () => {
  const [neuronData, setNeuronData] = useState({
    id: '',
    voltaje: '',
    posicion_x: '',
    posicion_y: '',
    red: '',
    green: '',
    blue: ''
  });

  const [adminNeurona] = useState(new AdminNeurona());

  const handleInputChange = (name, value) => {
    setNeuronData({
      ...neuronData,
      [name]: value
    });
  };

  const agregarNeurona = (inicio = false) => {
    const nuevaNeurona = new Neurona(
      neuronData.id,
      neuronData.voltaje,
      neuronData.posicion_x,
      neuronData.posicion_y,
      neuronData.red,
      neuronData.green,
      neuronData.blue
    );

    // Agregamos la neurona al inicio o al final
    if (inicio) {
      adminNeurona.agregar_inicio(nuevaNeurona);
    } else {
      adminNeurona.agregar_final(nuevaNeurona);
    }

    // Mostramos una alerta con la información
    Alert.alert("Neurona Agregada", nuevaNeurona.print());
  };

  return (
    <LinearGradient colors={['#87CEFA', '#4682B4', '#1E90FF']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Captura de Neuronas</Text>

        <Text style={styles.label}>ID (entero)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el ID"
          placeholderTextColor="#888"
          value={neuronData.id}
          onChangeText={(value) => handleInputChange('id', value)}
        />

        <Text style={styles.label}>Voltaje (real)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el Voltaje"
          placeholderTextColor="#888"
          value={neuronData.voltaje}
          onChangeText={(value) => handleInputChange('voltaje', value)}
        />

        <Text style={styles.label}>Posición X (entero)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese la posición X"
          placeholderTextColor="#888"
          value={neuronData.posicion_x}
          onChangeText={(value) => handleInputChange('posicion_x', value)}
        />

        <Text style={styles.label}>Posición Y (entero)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese la posición Y"
          placeholderTextColor="#888"
          value={neuronData.posicion_y}
          onChangeText={(value) => handleInputChange('posicion_y', value)}
        />

        <Text style={styles.label}>Red (entero)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el valor de Red"
          placeholderTextColor="#888"
          value={neuronData.red}
          onChangeText={(value) => handleInputChange('red', value)}
        />

        <Text style={styles.label}>Green (entero)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el valor de Green"
          placeholderTextColor="#888"
          value={neuronData.green}
          onChangeText={(value) => handleInputChange('green', value)}
        />

        <Text style={styles.label}>Blue (entero)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Ingrese el valor de Blue"
          placeholderTextColor="#888"
          value={neuronData.blue}
          onChangeText={(value) => handleInputChange('blue', value)}
        />

        <TouchableOpacity style={styles.button} onPress={() => agregarNeurona(true)}>
          <Text style={styles.buttonText}>Agregar Neurona al Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => agregarNeurona(false)}>
          <Text style={styles.buttonText}>Agregar Neurona al Final</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Neuronas Almacenadas", adminNeurona.mostrar())}>
          <Text style={styles.buttonText}>Mostrar Neuronas</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
    color: '#fff',
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f0f8ff',
    color: '#000', // Texto en negro
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
