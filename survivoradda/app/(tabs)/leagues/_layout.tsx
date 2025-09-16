import { Stack } from 'expo-router';

export default function LeaguesLayout() {
  return (
    <Stack 
      screenOptions={{ 
        headerShown: false,
        presentation: 'card'
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Leagues'
        }}
      />
      <Stack.Screen 
        name="details" 
        options={{
          title: 'Game Details',
          presentation: 'modal'
        }}
      />
      <Stack.Screen 
        name="prizepool" 
        options={{
          title: 'Prize Pool',
          presentation: 'modal'
        }}
      />
    </Stack>
  );
}