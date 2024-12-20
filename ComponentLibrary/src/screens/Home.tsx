import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada",
    "Remada",
    "Remada Unilateral",
    "Levantamento Terra",
  ]);
  const [groups, setGroups] = useState<string[]>([
    "Costa",
    "Ombro",
    "Triceps",
    "Biceps",
    "Peito",
    "Perna",
    "Panturrilha",
    "Antebraco",
  ]);
  const [groupSelected, setGroupSelected] = useState<string>("costa");

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 32,
          gap: 10,
        }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md" fontFamily="$heading">
            Exercicios
          </Heading>
          <Text color="$gray200" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
