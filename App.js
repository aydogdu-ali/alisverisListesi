import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BuyerList from "./components/BuyerList";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Listeye Ekle" color="green" onPress={openModal} />
        <BuyerList visible={modalOpen} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    // yatayda boşluk verdik
    paddingHorizontal: 20,
  },
});
