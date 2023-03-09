import { View, Text, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View className={`w-24 h-24 p-2 rounded-full items-center justify-center ${type === title.toLowerCase() ? "bg-gray-200" : ""}`}>
        <Image source={imageSrc} className="w-full h-full object-contain" />
      </View>
      <Text className="text-[#00bcc9] font-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
