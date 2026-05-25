import ButtonComponent from "@/components/Old/ButtonComponent";
import ComponentA from "@/components/Old/ComponentA";
import DynamicContent from "@/components/Old/DynamicContent";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello, World!</Text>
        <ComponentA />
        <ButtonComponent />
        <DynamicContent />
      </View>
    </SafeAreaView>
  );
};

export default Index;
