import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { Alert, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function GameDetails() {
  const { leagueId, leagueName } = useLocalSearchParams();
  const [teamName, setTeamName] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const handleJoinMatch = () => {
    if (!isMounted) return;
    
    if (!teamName.trim()) {
      Alert.alert('Error', 'Please enter your team name');
      return;
    }
    
    Alert.alert(
      'Match Joined!',
      `You have successfully joined ${leagueName}`,
      [
        {
          text: 'OK',
          onPress: () => {
            if (isMounted) {
              router.push('/(tabs)/matches');
            }
          }
        }
      ]
    );
  };

  const handleBack = () => {
    if (isMounted && router.canGoBack()) {
      router.back();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3 flex-row items-center">
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-semibold ml-4">Game Details</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Game Banner */}
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' }}
          className="w-full h-48"
        />
        
        <View className="px-4 py-4">
          <Text className="text-2xl font-bold mb-4">{leagueName}</Text>
          
          {/* Game Info */}
          <View className="bg-white rounded-2xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-3">How to play Create Team</Text>
            <Text className="text-gray-600 mb-3">Match/Invite to Play</Text>
            
            <View className="flex-row justify-around mb-4">
              <View className="items-center">
                <Ionicons name="people" size={24} color="#f97316" />
                <Text className="text-sm mt-1">Team</Text>
                <Text className="font-semibold">4 Players</Text>
              </View>
              <View className="items-center">
                <Ionicons name="time" size={24} color="#f97316" />
                <Text className="text-sm mt-1">Time</Text>
                <Text className="font-semibold">15 Min</Text>
              </View>
              <View className="items-center">
                <Ionicons name="trophy" size={24} color="#f97316" />
                <Text className="text-sm mt-1">Prize</Text>
                <Text className="font-semibold">₹2500</Text>
              </View>
            </View>
          </View>
          
          {/* Entry Form */}
          <View className="bg-white rounded-2xl p-4 mb-4">
            <Text className="text-lg font-semibold mb-3">Enter your Team Name</Text>
            <Text className="text-gray-600 mb-3">Note: - Game name must be 3-12 letters</Text>
            <Text className="text-gray-600 mb-3">Note: you download Bermuda Classic map?</Text>
            
            <TextInput
              value={teamName}
              onChangeText={setTeamName}
              placeholder="Free Fire Username"
              className="bg-gray-100 p-4 rounded-lg mb-4"
            />
            
            <Text className="text-gray-600 mb-4">Free Fire User ID</Text>
            
            <View className="flex-row items-center mb-4">
              <TouchableOpacity className="mr-3">
                <Ionicons name="radio-button-on" size={20} color="#f97316" />
              </TouchableOpacity>
              <Text>Yes</Text>
              <TouchableOpacity className="ml-6 mr-3">
                <Ionicons name="radio-button-off" size={20} color="#gray" />
              </TouchableOpacity>
              <Text>No</Text>
            </View>
            
            <Text className="text-sm text-gray-600 mb-4">Paytm/G: 612.0</Text>
          </View>
          
          {/* Action Buttons */}
          <View className="flex-row gap-2 mb-6">
            <TouchableOpacity 
              onPress={handleBack}
              className="flex-1 border border-gray-300 py-4 rounded-lg"
            >
              <Text className="text-center font-semibold">Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={handleJoinMatch}
              className="flex-1 bg-orange-500 py-4 rounded-lg"
            >
              <Text className="text-white text-center font-semibold">Pay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}