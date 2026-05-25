import { Pressable, Text, View } from "react-native";

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>

      <Pressable onPress={() => console.log("Button Pressed")}>
        <Text style={{ color: "red" }}>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
