import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MatchDetails() {
  const { id, matchName } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold ml-4">Match Details</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Match Banner */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' }}
          className="w-full h-48"
        />
        
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4">{matchName}</Text>
          
          {/* Match Status */}
          <View className="bg-white rounded-2xl p-4 mb-4">
            <View className="flex-row items-center mb-3">
              <View className="w-3 h-3 bg-green-500 rounded-full mr-2" />
              <Text className="text-lg font-semibold">Match Status: Upcoming</Text>
            </View>
            <Text className="text-gray-600 mb-2">Scheduled for: Today at 2:30 PM</Text>
            <Text className="text-gray-600">Room ID will be shared 10 minutes before match</Text>
          </View>
          
          {/* Match Info */}
          <View className="bg-white rounded-2xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-3">Match Information</Text>
            
            <View className="flex-row justify-around mb-4">
              <View className="items-center">
                <Ionicons name="people" size={24} color="#f97316" />
                <Text className="text-sm mt-1">Players</Text>
                <Text className="font-semibold">4/4</Text>
              </View>
              <View className="items-center">
                <Ionicons name="time" size={24} color="#f97316" />
                <Text className="text-sm mt-1">Duration</Text>
                <Text className="font-semibold">15 Min</Text>
              </View>
              <View className="items-center">
                <Ionicons name="trophy" size={24} color="#f97316" />
                <Text className="text-sm mt-1">Prize Pool</Text>
                <Text className="font-semibold">₹2500</Text>
              </View>
            </View>
          </View>
          
          {/* Rules */}
          <View className="bg-white rounded-2xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-3">Match Rules</Text>
            <Text className="text-gray-600 mb-2">• No teaming allowed</Text>
            <Text className="text-gray-600 mb-2">• Use of hacks will result in disqualification</Text>
            <Text className="text-gray-600 mb-2">• Room ID will be shared in chat</Text>
            <Text className="text-gray-600">• Screenshot proof required for wins</Text>
          </View>
          
          {/* Action Buttons */}
          <View className="flex-row gap-2 mb-6">
            <TouchableOpacity className="flex-1 border border-red-500 py-4 rounded-lg">
              <Text className="text-red-500 text-center font-semibold">Leave Match</Text>
            </TouchableOpacity>
            
            <TouchableOpacity className="flex-1 bg-orange-500 py-4 rounded-lg">
              <Text className="text-white text-center font-semibold">Join Room</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}