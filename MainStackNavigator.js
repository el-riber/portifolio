import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import SkillsPage from '../pages/SkillsPage';
import ContactPage from '../pages/ContactPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Projects" component={ProjectsPage} />
        <Stack.Screen name="Skills" component={SkillsPage} />
        <Stack.Screen name="Contact" component={ContactPage} />
        <Stack.Screen name="ProjectDetail" component={ProjectDetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
