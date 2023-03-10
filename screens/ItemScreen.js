import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
// import * as Linking from 'expo-linking';
import { A } from '@expo/html-elements';

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative mt-2">
      <ScrollView className="flex-1 px-4 pt-8">
        <View className="relative bg-white" style={{ elevation: 6 }}>
          <Image
            source={{
              uri:
                data?.photo?.images?.large?.url
                  ? data?.photo?.images?.large?.url
                  : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
            }}
            className="w-full h-72 rounded-2xl object-cover"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="w-10 h-10 rounded-md items-center justify-center bg-white">
              <FontAwesome5 name="chevron-left" size={24} color="#06b2be" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06b2be]">
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-4">
            <View className="flex-row space-x-2 items-center bg-gray-400 px-2 rounded-md">
              <Text className="text-[12px] font-bold text-gray-100">
                {data?.price_level}
              </Text>
              <Text className="text-[24px] font-bold text-gray-100">
                {data?.price}
              </Text>
            </View>

            <View className="flex justify-center px-2 py-1 rounded-md bg-teal-100">
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View className="mt-4">
          <Text className="text-[#428288] text-[24px] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-1">
            <FontAwesome5 name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="star" size={22} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.rating}</Text>
                <Text className="text-[#515151]">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-xl bg-red-100 items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={22} color="black" />
              </View>
              <View>
                <Text className="text-[#515151]">{data?.price_level}</Text>
                <Text className="text-[#515151]">Price Level</Text>
              </View>
            </View>
          )}

          {data?.distance_string && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-xl bg-red-100 items-center justify-center shadow-md">
                <FontAwesome5 name="route" size={22} color="black" />
              </View>
              <View>
                <Text className="text-[#515151] capitalize">
                  {data?.distance_string}
                </Text>
                <Text className="text-[#515151]">Away</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome5 name="phone" size={24} color="#428288" />
              <Text className="text-lg">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome5 name="envelope" size={24} color="#428288" />
              <Text className="text-lg">{data?.email}</Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome5 name="map-pin" size={24} color="#428288" />
              <Text className="text-lg">{data?.address}</Text>
            </View>
          )}

          <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
            <A href={data?.website}>
              <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
                Book Now
              </Text>
            </A>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  );
};

export default ItemScreen;
