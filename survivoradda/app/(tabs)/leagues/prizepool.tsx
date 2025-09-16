import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const prizeDistribution = [
  { position: '1st', prize: 1500, percentage: '60%' },
  { position: '2nd', prize: 600, percentage: '24%' },
  { position: '3rd', prize: 300, percentage: '12%' },
  { position: '4th', prize: 100, percentage: '4%' },
];

export default function PrizePool() {
  const { leagueId, leagueName } = useLocalSearchParams();

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3 flex-row items-center">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold ml-4">Prize Pool</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        <View className="bg-white rounded-2xl p-6 mb-4">
          <Text className="text-2xl font-bold text-center mb-2">{leagueName}</Text>
          <Text className="text-center text-gray-600 mb-6">Total Prize Pool: ₹2500</Text>
          
          <View className="space-y-3">
            {prizeDistribution.map((item, index) => (
              <View key={index} className="flex-row justify-between items-center py-3 border-b border-gray-100">
                <View className="flex-row items-center">
                  <View className="w-8 h-8 bg-orange-500 rounded-full items-center justify-center mr-3">
                    <Text className="text-white font-bold text-sm">{index + 1}</Text>
                  </View>
                  <Text className="font-semibold">{item.position} Place</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-bold">₹{item.prize}</Text>
                  <Text className="text-sm text-gray-600">{item.percentage}</Text>
                </View>
              </View>
            ))}
          </View>
          
          <View className="mt-6 p-4 bg-orange-50 rounded-lg">
            <Text className="text-center text-orange-700 font-semibold">Entry Fee: ₹702</Text>
            <Text className="text-center text-sm text-gray-600 mt-1">4 players maximum</Text>
          </View>
        </View>
        
        <TouchableOpacity 
          onPress={() => router.push({
            pathname: '/(tabs)/leagues/details',
            params: { leagueId, leagueName }
          })}
          className="bg-orange-500 py-4 rounded-lg"
        >
          <Text className="text-white text-center font-semibold text-lg">Join This Match</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}