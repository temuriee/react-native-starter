import { Image, Text, View } from "react-native";

const ComponentA = () => {
  return (
    <View>
      <Text>ComponentA</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("@/assets/images/temo23.jpg")}
      />

      <Image
        style={{ width: 200, height: 200 }}
        source={require("@/assets/images/temo.jpg")}
      />
    </View>
  );
};

export default ComponentA;

// rnfes
// rnfe
// rnf
