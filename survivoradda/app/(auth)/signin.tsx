import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const handleSignIn = () => {
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

      {/* Decorative Curve Bottom */}
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
          style={{ width: 180, height: 180, marginBottom: 24 }}
          resizeMode="contain"
        />

        {/* Sign In Card */}
        <View className="bg-[#FFF8E1] border border-[#FF8C00] rounded-2xl w-full p-6 shadow-md">
          <Text className="text-2xl font-bold mb-6 text-center text-black">
            Sign In
          </Text>

          {/* Email Input */}
          <TextInput
            placeholder="Email"
            className="bg-white border border-gray-300 p-3 rounded-lg mb-4"
            keyboardType="email-address"
          />

          {/* Password Input */}
          <TextInput
            placeholder="Password"
            className="bg-white border border-gray-300 p-3 rounded-lg mb-2"
            secureTextEntry
          />

          {/* Forgot Password */}
          <TouchableOpacity className="mb-4">
            <Text className="text-[#FF8C00] text-right text-sm">
              Forgot password?
            </Text>
          </TouchableOpacity>

          {/* Login Button */}
          <LinearGradient
            colors={["#FDCC71", "#FFA90D"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            className="rounded-full"
          >
            <TouchableOpacity
              onPress={handleSignIn}
              className="py-3 rounded-full"
            >
              <Text className="text-white text-center font-semibold text-lg">
                Login
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          {/* Already User */}
          <Text className="text-center text-gray-700 mt-4">
            Already user?{" "}
            <Text
              className="text-[#FF8C00] font-semibold"
              onPress={() => router.push("/(auth)/signup")}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
