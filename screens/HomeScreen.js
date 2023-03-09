import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeroImage } from '../assets';
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="white flex-1 relative">
      {/* First Section */}
      <View className="flex-row px-6 mt-2 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full items-center justify-center">
          <Text className="text-[#00bcc9] text-3xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2a2b4b] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-2 space-y-1">
        <Text className="text-[#3c6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00bcc9] text-[38px] font-bold">Good moments</Text>
        <Text className="text-[#3c6072] text-sm">
          Find attractions, hotels and restaurants in any place around the World, the easiest way!
        </Text>
      </View>

      {/* Circle Section */}
      <View className="w-[320px] h-[320px] bg-[#00bcc9] rounded-full absolute top-96 -right-36"></View>
      <View className="w-[320px] h-[320px] bg-[#e99265] rounded-full absolute -bottom-16 -left-28"></View>

      {/* Hero Section */}
      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-full h-full object-cover mt-10"
        />
        <View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 rounded-full border-[#00bcc9] items-center justify-center">
          <TouchableOpacity>
            <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className="w-20 h-20 items-center justify-center rounded-full bg-[#00bcc9]">
              <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
