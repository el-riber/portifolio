import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SkillsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skills Page</Text>
      <Text style={styles.body}>These are the skills I have acquired.</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  body: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default SkillsPage;
