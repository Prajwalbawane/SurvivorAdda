import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Splash() {
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
     {/* Samurai Illustration */}
<Image
  source={require("../../assets/images/samurai.png")}
  style={{
    width: 260,
    height: 280,
    position: "absolute",
    bottom: -50, // push slightly down so it sticks to the bottom edge
    right: 0,
    opacity: 0.9,
    zIndex: 1,
  }}
  resizeMode="contain"
/>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center px-8 z-10">
        {/* Title */}
        <Text className="text-black text-6xl font-extrabold text-center leading-tight mb-6 stroke-orange-50">
          Play Hard,{"\n"}Win Big
        </Text>

        {/* Logo */}
        <Image
          source={require("../../assets/images/main_logo.png")}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />

        {/* Buttons */}
        <View className="w-full mt-12">
          {/* Sign In Button */}
          <LinearGradient
            colors={["#FDCC71", "#FFA90D"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            className="rounded-full"
          >
            <TouchableOpacity
              onPress={() => router.push("/(auth)/signin")}
              className="flex-row items-center justify-between py-4 px-6"
            >
              <Text className="text-white font-semibold text-lg">Sign In</Text>
              <Ionicons name="arrow-forward" size={22} color="white" />
            </TouchableOpacity>
          </LinearGradient>

          {/* Sign Up Button (with border) */}
          <LinearGradient
            colors={["#FFF5E6", "#FFE6B6"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
              borderRadius: 9999,
              padding: 2,
              marginTop: 16,
            }}
          >
            <TouchableOpacity
              onPress={() => router.push("/(auth)/signup")}
              className="flex-row items-center justify-between py-4 px-6 rounded-full bg-white"
            >
              <Text className="font-bold text-lg text-black">Sign Up</Text>
              <Ionicons name="arrow-forward" size={22} color="#FFA90D" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
}
