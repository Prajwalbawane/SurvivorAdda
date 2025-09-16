import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const profileOptions = [
  { id: 1, title: 'Edit Profile', icon: 'person-outline', action: () => {} },
  { id: 2, title: 'Transaction History', icon: 'receipt-outline', action: () => {} },
  { id: 3, title: 'Refer & Earn', icon: 'gift-outline', action: () => {} },
  { id: 4, title: 'Settings', icon: 'settings-outline', action: () => {} },
  { id: 5, title: 'Help & Support', icon: 'help-circle-outline', action: () => {} },
  { id: 6, title: 'Logout', icon: 'log-out-outline', action: () => router.replace('/(auth)/splash') },
];

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3">
        <Text className="text-white text-lg font-semibold">Profile</Text>
      </View>

      <ScrollView className="flex-1">
        {/* Profile Card */}
        <View className="bg-orange-500 mx-4 mt-4 rounded-2xl p-6">
          <View className="flex-row items-center">
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }}
              className="w-16 h-16 rounded-full"
            />
            <View className="ml-4 flex-1">
              <Text className="text-white text-xl font-bold">John Doe</Text>
              <Text className="text-white/80">john.doe@example.com</Text>
              <Text className="text-white/80">+91 9876543210</Text>
            </View>
          </View>
        </View>

        {/* Wallet Balance */}
        <View className="bg-white mx-4 mt-4 rounded-2xl p-4">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-gray-600">Wallet Balance</Text>
              <Text className="text-2xl font-bold text-green-600">₹100.00</Text>
            </View>
            <TouchableOpacity className="bg-orange-500 px-4 py-2 rounded-lg">
              <Text className="text-white font-semibold">Add Money</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Stats */}
        <View className="bg-white mx-4 mt-4 rounded-2xl p-4">
          <Text className="text-lg font-semibold mb-4">Your Stats</Text>
          <View className="flex-row justify-around">
            <View className="items-center">
              <Text className="text-2xl font-bold text-orange-500">5</Text>
              <Text className="text-gray-600 text-sm">Matches Played</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-green-500">2</Text>
              <Text className="text-gray-600 text-sm">Matches Won</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-blue-500">₹1250</Text>
              <Text className="text-gray-600 text-sm">Total Earnings</Text>
            </View>
          </View>
        </View>

        {/* Profile Options */}
        <View className="bg-white mx-4 mt-4 rounded-2xl overflow-hidden">
          {profileOptions.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              onPress={option.action}
              className={`flex-row items-center p-4 ${
                index < profileOptions.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <Ionicons name={option.icon as any} size={24} color="#f97316" />
              <Text className="ml-4 text-lg flex-1">{option.title}</Text>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}