import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";

export default function BuyerList({ visible, onAddData, onCalledData }) {
  // inputa girilen veriyi tutan state
  const [data, setData] = useState("");

  // elde ettiğimiz datayı props olarak üst  componente göndermek için yazdığımız fonksiyon.
  const dataAdd = () => {
    onAddData(data);
    // ekleye tıklandığında yeni ürün için inputu temizliyoruz.
    setData("");
  };

  // girilen text metnini almak aldık ve değişkenimize atadık.
  const enteredData = (enteredText) => {
    setData(enteredText);
  };

  return (
    <View>
      <Modal animationType="slide" visible={visible}>
        <View style={styles.buyerContainer}>
          <Image
            style={styles.modalLogo}
            source={require("../assets/alisverislogosu.jpg")}
          />
          <TextInput
            style={styles.Input}
            placeholder="Yeni Ürün Ekle"
            value={data}
            onChangeText={enteredData}
            //  araw şeklinde yaızılımı
            //onChangeText={(enteredData)=>setData(enteredData)}/
          />

          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <Button title="İptal" color="red" onPress={onCalledData} />
            </View>
            <View style={styles.buttons}>
              <Button title="Ekle" color="blue" onPress={dataAdd} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buyerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
    padding: 15,
  },
  modalLogo: {
    width: 150,
    height: 150,
    borderRadius: 30,
    margin: 20,
  },
  Input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
    borderColor: "yellow",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  buttons: {
    width: 80,
    margin: 5,
  },
});
