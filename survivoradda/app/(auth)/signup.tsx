import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const handleSignUp = () => {
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-white relative">
      {/* Background Gradient */}
      <LinearGradient
        colors={["#FDCC71", "#FFE6B6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="absolute inset-0 z-0"
      />

      {/* Decorative Curve */}
      <View
        style={{
          width: 360,
          height: 360,
          borderTopLeftRadius: 300,
          backgroundColor: "#FFF5E6",
          position: "absolute",
          bottom: 0,
          right: 0,
          zIndex: 0,
        }}
      />

      {/* Samurai Illustration */}
      <Image
        source={require("../../assets/images/samurai.png")}
        style={{
          width: 260,
          height: 280,
          position: "absolute",
          bottom: -40,
          right: 0,
          opacity: 0.95,
          zIndex: 1,
        }}
        resizeMode="contain"
      />

      {/* Main Content */}
      <View className="flex-1 justify-center items-center px-6 z-10">
        {/* Logo */}
        <Image
          source={require("../../assets/images/main_logo.png")}
          style={{ width: 160, height: 160, marginBottom: 10 }}
          resizeMode="contain"
        />

        {/* Sign Up Card */}
        <View className="bg-[#FFF8E1] border border-[#FF8C00] rounded-2xl w-full p-6 shadow-md">
          <Text className="text-2xl font-bold mb-6 text-left text-black">
            Sign Up
          </Text>

          {/* First + Last Name */}
          <View className="flex-row gap-2 mb-4">
            <TextInput
              placeholder="First Name"
              className="bg-white border border-gray-300 p-3 rounded-lg flex-1"
            />
            <TextInput
              placeholder="Last Name"
              className="bg-white border border-gray-300 p-3 rounded-lg flex-1"
            />
          </View>

          {/* Email */}
          <TextInput
            placeholder="Email ID"
            className="bg-white border border-gray-300 p-3 rounded-lg mb-4"
            keyboardType="email-address"
          />

          {/* Password */}
          <TextInput
            placeholder="Password"
            className="bg-white border border-gray-300 p-3 rounded-lg mb-4"
            secureTextEntry
          />

          {/* Mobile */}
          <TextInput
            placeholder="Mobile"
            className="bg-white border border-gray-300 p-3 rounded-lg mb-6"
            keyboardType="phone-pad"
          />

          {/* Create Account Button */}
          <LinearGradient
            colors={["#FDCC71", "#FFA90D"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            className="rounded-lg"
          >
            <TouchableOpacity
              onPress={handleSignUp}
              className="py-3 rounded-lg"
            >
              <Text className="text-white text-center font-semibold text-lg">
                Create Account
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* Divider */}
          <View className="flex-row items-center my-4">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-2 text-gray-600">OR</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          {/* Google Sign Up */}
          <TouchableOpacity className="flex-row items-center justify-center border border-gray-300 py-3 rounded-lg">
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
              }}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />
            <Text className="text-center text-black">
              Sign up with Google
            </Text>
          </TouchableOpacity>

          {/* Already Registered */}
          <TouchableOpacity
            onPress={() => router.push("/(auth)/signin")}
            className="mt-4"
          >
            <Text className="text-center text-gray-800">
              Already Registered?
              <Text className="text-[#FF8C00] font-semibold"> Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
