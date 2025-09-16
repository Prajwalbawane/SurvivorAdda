import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const myMatches = [
  {
    id: 1,
    name: 'King Against King',
    mode: 'Solo',
    status: 'Upcoming',
    time: '2:30 PM',
    date: 'Today',
    entryFee: 702,
    prize: 2500,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200'
  },
  {
    id: 2,
    name: 'Squad Battle',
    mode: 'Duo',
    status: 'Live',
    time: '1:00 PM',
    date: 'Today',
    entryFee: 350,
    prize: 1250,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200'
  }
];

export default function MyMatches() {
  const handleMatchPress = (match: any) => {
    router.push({
      pathname: '/(tabs)/matches/[id]',
      params: { id: match.id, matchName: match.name }
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-red-500';
      case 'Upcoming': return 'bg-green-500';
      case 'Completed': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3">
        <Text className="text-white text-lg font-semibold">My Matches</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {myMatches.length === 0 ? (
          <View className="flex-1 items-center justify-center py-20">
            <Ionicons name="game-controller-outline" size={64} color="#9ca3af" />
            <Text className="text-gray-500 text-lg mt-4">No matches joined yet</Text>
            <Text className="text-gray-400 text-center mt-2">Join a tournament to see your matches here</Text>
          </View>
        ) : (
          myMatches.map((match) => (
            <TouchableOpacity
              key={match.id}
              onPress={() => handleMatchPress(match)}
              className="bg-white rounded-2xl mb-4 overflow-hidden shadow-sm"
            >
              <View className="flex-row">
                <Image 
                  source={{ uri: match.image }}
                  className="w-24 h-24"
                />
                <View className="flex-1 p-4">
                  <View className="flex-row justify-between items-start mb-2">
                    <Text className="text-lg font-bold flex-1">{match.name}</Text>
                    <View className={`px-2 py-1 rounded-full ${getStatusColor(match.status)}`}>
                      <Text className="text-white text-xs font-semibold">{match.status}</Text>
                    </View>
                  </View>
                  
                  <Text className="text-gray-600 mb-2">{match.mode} Mode</Text>
                  
                  <View className="flex-row justify-between">
                    <View>
                      <Text className="text-sm text-gray-600">Time</Text>
                      <Text className="font-semibold">{match.time}</Text>
                    </View>
                    <View>
                      <Text className="text-sm text-gray-600">Entry Fee</Text>
                      <Text className="font-semibold">₹{match.entryFee}</Text>
                    </View>
                    <View>
                      <Text className="text-sm text-gray-600">Prize</Text>
                      <Text className="font-semibold">₹{match.prize}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}