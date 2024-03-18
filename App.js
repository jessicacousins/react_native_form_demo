import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    alert("Form Submitted!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Form Demo 101</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        placeholderTextColor="#fff"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        placeholderTextColor="#fff"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#fff"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#fff"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Zip Code"
        placeholderTextColor="#fff"
        keyboardType="numeric"
        value={zipCode}
        onChangeText={setZipCode}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        placeholderTextColor="#fff"
        value={address}
        onChangeText={setAddress}
      />

      <Picker
        selectedValue={country}
        style={styles.picker}
        itemStyle={{ color: "#fff" }}
        onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
      >
        <Picker.Item label="Select a country" value="" />
        <Picker.Item label="Canada" value="CA" />
        <Picker.Item label="Mexico" value="MX" />
        <Picker.Item label="United States" value="US" />
      </Picker>

      {/* <Button title="Submit" onPress={handleSubmit} /> */}
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonsubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#212121",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    color: "#00ff00",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: "#fff",
  },
  picker: {
    width: "100%",
    marginVertical: 10,
    color: "white",
  },

  buttonsubmit: {
    backgroundColor: "limegreen",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
