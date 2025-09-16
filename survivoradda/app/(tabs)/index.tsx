import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const gameModes = [
  { id: 1, name: 'Free Fire', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200' },
  { id: 2, name: 'Free Fire Max', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200' },
  { id: 3, name: 'Clash Squad', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200' },
  { id: 4, name: 'Lone Wolf', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200' },
];

export default function Home() {
  const handleModePress = (mode: any) => {
    router.push({
      pathname: '/(tabs)/leagues',
      params: { mode: mode.name }
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3 flex-row items-center justify-between">
        <TouchableOpacity>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View className="flex-row items-center bg-white/20 px-3 py-1 rounded-full">
          <Ionicons name="wallet" size={16} color="white" />
          <Text className="text-white ml-1 font-semibold">₹100</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Banner */}
        <View className="mx-4 mt-4 rounded-2xl overflow-hidden">
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' }}
            className="w-full h-48"
          />
        </View>

        {/* ESPORTS Matches Section */}
        <View className="mx-4 mt-6">
          <Text className="text-xl font-bold mb-4">ESPORTS Matches</Text>
          
          <View className="flex-row flex-wrap justify-between">
            {gameModes.map((mode) => (
              <TouchableOpacity
                key={mode.id}
                onPress={() => handleModePress(mode)}
                className="w-[48%] mb-4 bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                <Image 
                  source={{ uri: mode.image }}
                  className="w-full h-32"
                />
                <View className="p-3">
                  <Text className="font-semibold text-center">{mode.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}