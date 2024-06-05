import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProjectsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Projects Page</Text>
      <Text style={styles.body}>Here are some of the projects I have worked on.</Text>
      <Button title="Project Detail" onPress={() => navigation.navigate('ProjectDetail', { id: 1 })} />
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

export default ProjectsPage;
