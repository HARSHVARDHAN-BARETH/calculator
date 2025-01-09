import { Stack } from 'expo-router';


export default function RootLayout() {

  return (
      <Stack>
        <Stack.Screen name="todo" options={{ headerShown: false }} />
        <Stack.Screen name="calculator" options={{ headerShown: false }} />
        <Stack.Screen name="flatlist" options={{ headerShown: false }} />
        <Stack.Screen name="api" options={{ headerShown: false }} />
        <Stack.Screen name="gemini" options={{ headerShown: false }} />
        <Stack.Screen name="task" options={{ headerShown: false }} />
        <Stack.Screen name="page" options={{ headerShown: false }} />
        {/* <Stack.Screen name="chat" options={{ headerShown: false }} />
        <Stack.Screen name="sign" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="user" options={{ headerShown: false }} />
        <Stack.Screen name="userProfile" options={{ headerShown: false }} /> */}
      </Stack>
  );
}
