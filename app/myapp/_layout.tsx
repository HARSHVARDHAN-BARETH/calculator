import { Stack } from 'expo-router';


export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="signin" options={{ headerShown: false }} />    
        <Stack.Screen name="users" options={{ headerShown: false }} />    
      </Stack>
  );
}
