import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BuyerList from "./components/BuyerList";

export default function App() {
  // Modalın durumunu ayarladığımız state
  const [modalOpen, setModalOpen] = useState(false);

  // modalı açma fonksiyonu
  const openModal = () => {
    setModalOpen(true);
  };

  // modalı kapatma fonksiyonu
  const closeModal = ()=>{
     setModalOpen(false);
  }

  const addList = (foodName)=>{

    // listeyi malzeme ekleyince kapatıyoruz.
    closeModal()

  }

  // iptal butonuna bastığımızda modalı kapatıyoruz.
  const onCalledData = () => {
     closeModal()
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Listeye Ekle" color="green" onPress={openModal} />
        <BuyerList visible={modalOpen} onAddData={addList}  onCalledData={closeModal}/>
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
