import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const apiUrl = "http://localhost:8000/api/v1";

export default function Job() {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const json = await response.json();
      console.log("Response:", json);
      setResponseData(json);
    } catch (error) {
      console.error("Error al hacer la solicitud:", error);
    }
  };

  return (
    <View>
      <Text>Response:</Text>
      <Button title="Hacer GET" onPress={fetchData} />
      {responseData && (
        <View>
          <Text>Response Data:</Text>
          <Text>{JSON.stringify(responseData, null, 2)}</Text>
        </View>
      )}
    </View>
  );
}
