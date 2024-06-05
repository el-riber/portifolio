import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hey there!</Text>
      <Text style={styles.body}>
        I'm excited about technology with a focus on data. Recently received the Google TensorFlow certification. Currently a student.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Projects')}>
        <Text style={styles.buttonText}>Projects</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Skills')}>
        <Text style={styles.buttonText}>Skills</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
        <Text style={styles.buttonText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  body: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default HomePage;
