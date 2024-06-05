import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProjectDetailPage = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Project Detail Page</Text>
      <Text style={styles.body}>Details of Project ID: {id}</Text>
      <Button title="Back to Projects" onPress={() => navigation.navigate('Projects')} />
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

export default ProjectDetailPage;
