import { Text, View } from "react-native";

const DynamicContent = () => {
  let username = "Mindia";
  const multiply = (a: number, b: number) => a + b;

  return (
    <View>
      <Text>DynamicContent</Text>
      <Text>Username: {username}</Text>
      <Text>Result: {multiply(2, 2)}</Text>
      <Text>My Friends List: {["Alex", "John", "Sarah", "Mike", "Emily"]}</Text>
    </View>
  );
};

export default DynamicContent;
