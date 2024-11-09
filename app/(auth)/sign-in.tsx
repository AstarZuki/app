import { router } from "expo-router";
// import { useRef, useState } from "react";
import {  Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signin = () => {

  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/welcome");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">yoo</Text>
      </TouchableOpacity>



    </SafeAreaView>
  );
};

export default signin;