
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import ClickCount from './ClickCount';
import APITest from './APITest';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Log-in" component={LoginPage} options={{title: "Welcome"}} />
        <Stack.Screen name= "HomePage" component={HomePage} options={{title: "Home"}} />
        <Stack.Screen name= "ClickCount" component={ClickCount} options={{title: "Click Count Page"}} />
        <Stack.Screen name= "APITest" component={APITest} options={{title: "Test some API"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




