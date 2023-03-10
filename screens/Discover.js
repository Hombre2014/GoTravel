import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Hotels, Attractions, Restaurants, NotFound } from '../assets';
import { API_KEY } from '@env';
import MenuContainer from '../components/MenuContainer';
import { FontAwesome } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from "../api";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState('restaurants');
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#0b646b] font-bold">Discover</Text>
          <Text className="text-[#527273] text-[32px]">the beauty today</Text>
        </View>
        <View
          className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center"
          style={{ elevation: 12 }}
        >
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View
        className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-4 mt-4"
        style={{ elevation: 16 }}
      >
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: 'geometry' }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: API_KEY,
            language: 'en',
          }}
        />
      </View>

      {/* Menu Container */}
      {isLoading ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#ob646b" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-8">
            <MenuContainer
              key={'hotel'}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={'attractions'}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={'restaurants'}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          {/* List of places */}
          <View>
            <View className="flex-row items-center justify-between px-8 mt-8">
              <Text className="text-[#2c7379] text-[28px] font-bold">
                Top Tips
              </Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                <Text className="text-[#a0c4c7] text-[20px] font-bold">
                  Explore
                </Text>
                <FontAwesome
                  name="long-arrow-right"
                  size={24}
                  color="#a0c4c7"
                />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                <>
                  <ItemCardContainer
                    key={'101'}
                    imageSrc={
                      'https://cdn.pixabay.com/photo/2023/03/02/03/01/bird-7824442__340.jpg'
                    }
                    title="Something longer then"
                    location="Doha extra log location"
                  />
                  <ItemCardContainer
                    key={'102'}
                    imageSrc={
                      'https://cdn.pixabay.com/photo/2023/03/03/17/36/peafowl-7828140__340.jpg'
                    }
                    title="Sample"
                    location="Katar"
                  />
                </>
              ) : (
                <>
                  <View className="w-full h-[300px] items-center space-y-8 justify-center">
                    <Image
                      source={NotFound}
                      className="w-24 h-24 object-cover"
                    />
                    <Text className="text-[#428288] text-2xl font-semibold">
                      Opps... No results found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
