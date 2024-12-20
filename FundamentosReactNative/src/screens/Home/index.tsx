import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, setNewParticipant] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(newParticipant)) {
      setNewParticipant("");
      return Alert.alert("Participante", "Esse participante ja foi adicionado");
    }
    if (newParticipant.trim() === "") {
      return Alert.alert("Participante", "Colocar um nome e obrigatorio");
    }
    setParticipants([...participants, newParticipant]);
  }
  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover participante",
      `Deseja remover o participante ${name} ?`,
      [
        {
          text: "Não",
          onPress: () => {
            console.log("Cancelado");
          },
        },
        {
          text: "Sim",
          onPress: () => {
            setParticipants(
              participants.filter((participant) => participant !== name)
            );
          },
        },
      ]
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setNewParticipant}
          value={newParticipant}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no seu evento ainda? Adicione Participantes a sua
            lista de presenca
          </Text>
        )}
      />
      {/* {participants.map((participant) => (
        <Participant
          key={participant}
          name={participant}
          onRemove={handleParticipantRemove}
        />
      ))} */}
    </View>
  );
}
