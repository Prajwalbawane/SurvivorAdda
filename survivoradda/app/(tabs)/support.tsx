import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const faqs = [
  {
    id: 1,
    question: 'How do I join a tournament?',
    answer: 'Select a game mode from the home screen, choose a league, and click "Join Match" to participate.'
  },
  {
    id: 2,
    question: 'How do I add money to my wallet?',
    answer: 'Go to your profile and click "Add Money" to add funds using various payment methods.'
  },
  {
    id: 3,
    question: 'What happens if I win a match?',
    answer: 'Prize money will be automatically credited to your wallet within 24 hours of match completion.'
  },
  {
    id: 4,
    question: 'Can I cancel a match after joining?',
    answer: 'You can leave a match before it starts, but entry fees are non-refundable.'
  }
];

const contactOptions = [
  {
    id: 1,
    title: 'WhatsApp Support',
    subtitle: 'Chat with us on WhatsApp',
    icon: 'logo-whatsapp',
    color: '#25D366',
    action: () => Linking.openURL('https://wa.me/919876543210')
  },
  {
    id: 2,
    title: 'Email Support',
    subtitle: 'Send us an email',
    icon: 'mail-outline',
    color: '#f97316',
    action: () => Linking.openURL('mailto:support@survivoradda.com')
  },
  {
    id: 3,
    title: 'Call Support',
    subtitle: '+91 98765 43210',
    icon: 'call-outline',
    color: '#3b82f6',
    action: () => Linking.openURL('tel:+919876543210')
  }
];

export default function Support() {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-orange-500 px-4 py-3">
        <Text className="text-white text-lg font-semibold">Support</Text>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {/* Contact Options */}
        <View className="bg-white rounded-2xl mb-6 overflow-hidden">
          <Text className="text-lg font-semibold p-4 border-b border-gray-100">Contact Us</Text>
          {contactOptions.map((option, index) => (
            <TouchableOpacity
              key={option.id}
              onPress={option.action}
              className={`flex-row items-center p-4 ${
                index < contactOptions.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <View className="w-12 h-12 rounded-full items-center justify-center mr-4" style={{ backgroundColor: `${option.color}20` }}>
                <Ionicons name={option.icon as any} size={24} color={option.color} />
              </View>
              <View className="flex-1">
                <Text className="text-lg font-semibold">{option.title}</Text>
                <Text className="text-gray-600">{option.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          ))}
        </View>

        {/* FAQ Section */}
        <View className="bg-white rounded-2xl overflow-hidden">
          <Text className="text-lg font-semibold p-4 border-b border-gray-100">Frequently Asked Questions</Text>
          {faqs.map((faq, index) => (
            <View
              key={faq.id}
              className={`p-4 ${
                index < faqs.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <Text className="text-lg font-semibold mb-2">{faq.question}</Text>
              <Text className="text-gray-600 leading-5">{faq.answer}</Text>
            </View>
          ))}
        </View>

        {/* App Info */}
        <View className="bg-white rounded-2xl mt-6 p-4">
          <Text className="text-lg font-semibold mb-4">App Information</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Version</Text>
            <Text className="font-semibold">1.0.0</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Last Updated</Text>
            <Text className="font-semibold">Dec 2024</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-600">Developer</Text>
            <Text className="font-semibold">SurvivorAdda</Text>
          </View>
        </View>

        <View className="h-6" />
      </ScrollView>
    </SafeAreaView>
  );
}