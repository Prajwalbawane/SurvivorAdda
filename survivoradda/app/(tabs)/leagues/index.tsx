import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const tournaments = [
  {
    id: 1,
    name: 'King Against King',
    entryFee: 82.0,
    prizePool: 570.0,
    killPoint: 20,
    startDate: '10 Mar 10:45 Am',
    totalParticipants: '10 Mar 10:45 Am',
    map: '10 Mar 10:45 Am',
    filled: '48/48',
    hasVector: false,
    hasRevival: true,
    bonusUsable: 50
  },
  {
    id: 2,
    name: 'King Against King',
    entryFee: 82.0,
    prizePool: 570.0,
    killPoint: 20,
    startDate: '10 Mar 10:45 Am',
    totalParticipants: '10 Mar 10:45 Am',
    map: '10 Mar 10:45 Am',
    filled: '48/48',
    hasVector: false,
    hasRevival: true,
    bonusUsable: 50
  }
];

export default function Leagues() {
  const [selectedMode, setSelectedMode] = useState('Solo');

  const handleJoinMatch = (tournament: any) => {
    router.push({
      pathname: '/(tabs)/leagues/details',
      params: { leagueId: tournament.id, leagueName: tournament.name }
    });
  };

  return (
    <LinearGradient
      colors={['#FFA500', '#FF8C00', '#FFD700']}
      className="flex-1"
    >
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="px-4 py-3 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-semibold ml-4">Leagues</Text>
        </View>

        <ScrollView className="flex-1 px-4">
          {/* Free Fire Logo */}
          <View className="items-center mb-6">
            <View className="bg-red-600 px-6 py-3 rounded-xl">
              <Text className="text-white text-xl font-bold">FREE FIRE</Text>
              <Text className="text-white text-xs text-center">ESPORTS</Text>
            </View>
          </View>

          {/* Mode Selection */}
          <View className="flex-row justify-center mb-6">
            {['Solo', 'Duo', 'Squad'].map((mode) => (
              <TouchableOpacity
                key={mode}
                onPress={() => setSelectedMode(mode)}
                className={`px-6 py-2 mx-2 rounded-full ${
                  selectedMode === mode ? 'bg-orange-600' : 'bg-orange-400'
                }`}
              >
                <Text className="text-white font-semibold">{mode}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Tournament Cards */}
          {tournaments.map((tournament) => (
            <View key={tournament.id} className="bg-white rounded-2xl mb-4 p-4">
              <Text className="text-orange-500 text-lg font-bold mb-3">{tournament.name}</Text>
              
              {/* Status Icons */}
              <View className="flex-row mb-3">
                <View className="flex-row items-center mr-4">
                  <Ionicons name="close-circle" size={16} color="red" />
                  <Text className="text-xs ml-1">No Vector</Text>
                </View>
                <View className="flex-row items-center mr-4">
                  <Ionicons name="checkmark-circle" size={16} color="red" />
                  <Text className="text-xs ml-1">Revival Off</Text>
                </View>
                <View className="flex-row items-center">
                  <Ionicons name="information-circle" size={16} color="orange" />
                  <Text className="text-xs ml-1">{tournament.bonusUsable}% Bonus Usable</Text>
                </View>
              </View>

              {/* Prize Info */}
              <View className="flex-row justify-between mb-4">
                <View>
                  <Text className="text-xs text-gray-600">Entry</Text>
                  <Text className="font-bold">₹{tournament.entryFee}</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-600">Prizes</Text>
                  <Text className="font-bold">₹{tournament.prizePool}</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-600">Kill Point</Text>
                  <Text className="font-bold">₹{tournament.killPoint}/Kill</Text>
                </View>
              </View>

              <Text className="text-right text-xs text-gray-600 mb-3">Filled {tournament.filled}</Text>

              {/* Tournament Details */}
              <View className="flex-row justify-between mb-4">
                <View>
                  <Text className="text-xs text-gray-600">🏆Start Date</Text>
                  <Text className="text-xs">{tournament.startDate}</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-600">👥Total Participants</Text>
                  <Text className="text-xs">{tournament.totalParticipants}</Text>
                </View>
                <View>
                  <Text className="text-xs text-gray-600">🗺️Map</Text>
                  <Text className="text-xs">{tournament.map}</Text>
                </View>
              </View>

              {/* View Button */}
              <TouchableOpacity 
                onPress={() => handleJoinMatch(tournament)}
                className="bg-orange-500 py-3 rounded-lg"
              >
                <Text className="text-white text-center font-bold">View</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}