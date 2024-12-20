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

export default function Home() {
  const participants = [
    "Rodrigo",
    "Cesar",
    "Nagoya",
    "Cielo",
    "Roberta",
    "Maria",
    "Mike",
    "Isa",
    "ASUDHAUSI",
    "ASUDHAUSID",
    "ASUDHAUSI234",
    "ASUDHAUSIAAAA",
  ];
  function handleParticipantAdd() {
    if (participants.includes("Rodrigo")) {
      return Alert.alert("Participante", "Participante já adicionado");
    }
    console.log("Adicionar participante");
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
            console.log("Deletado");
          },
        },
      ]
    );
    console.log("Remover participante");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do evento"
          placeholderTextColor="#6b6b6b"
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
