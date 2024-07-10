import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import BuyerList from "./components/BuyerList";

export default function App() {
  // Modalın durumunu ayarladığımız state
  const [modalOpen, setModalOpen] = useState(false);

  // Girilen malzemelerin isimlerinin tutalacağı stateti tanımlıyoruz.
  const [foodList, setFoodList] = useState([]);

  // modalı açma fonksiyonu
  const openModal = () => {
    setModalOpen(true);
  };

  // modalı kapatma fonksiyonu
  const closeModal = () => {
    setModalOpen(false);
  };

  const addList = (foodName) => {
    // burada veri varsa üzerine eklenmesi için desc. yaparak eklenen ürünü array a atıyoruz.
    setFoodList((item) => [
      ...item,
      {
        text: foodName,
        id: Math.random().toString(),
      },
    ]);
    // listeyi malzeme ekleyince kapatıyoruz.
    closeModal();
  };


// silme Fonksiyonu
  const deleteItem = (id) => {
    setFoodList((prevList) => {
      return prevList.filter((item) => item.id !== id);
    });
  };


  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title="Listeye Ekle" color="green" onPress={openModal} />
        <BuyerList
          visible={modalOpen}
          onAddData={addList}
          // iptal butonuna bastığımızda modalı kapatıyoruz.
          onCalledData={closeModal}
        />
        <View>
          <FlatList
            data={foodList}
            renderItem={({ item }) => (
              <View style={styles.list}>
                <Text style={styles.text}>{item.text}</Text>
                <Button
                  title="Sil"
                  onPress={() => deleteItem(item.id)}
                  color="red"
                  style={styles.button}
                />
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    // yatayda boşluk verdik
    paddingHorizontal: 20,
  },
  list: {
    backgroundColor: "orange",
    margin: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    width: 10,
    paddingTop: 10,
    paddingHorizontal: 40,
  },
});
