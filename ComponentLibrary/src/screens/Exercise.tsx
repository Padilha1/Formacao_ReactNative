import {
  VStack,
  Text,
  Icon,
  HStack,
  Heading,
  Image,
  Box,
  useToast,
} from "@gluestack-ui/themed";
import { TouchableOpacity, ScrollView } from "react-native";
import { Button } from "@components/Button";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import BodySvg from "@assets/body.svg";
import SeriesSvg from "@assets/series.svg";
import RepetitionSvg from "@assets/repetitions.svg";
import { api } from "@services/api";
import { AppError } from "@utils/AppErrors";
import { ToastMessage } from "@components/ToastMessage";
import { useEffect, useState } from "react";
import { ExercisesDTO } from "@dtos/ExercisesDTO";
import { Loading } from "@components/Loading";

type RouteParamsProps = {
  exerciseId: string;
};

export function Exercise() {
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [exerciseDetails, setExerciseDetails] = useState<ExercisesDTO>(
    {} as ExercisesDTO
  );
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const route = useRoute();
  const { exerciseId } = route.params as RouteParamsProps;

  async function fetchExercise() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      setExerciseDetails(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel carregar os exercicios.";
      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  async function handleExerciseHisytoryRegister() {
    try {
      setSubmitting(true);
      await api.post("/history", { exercise_id: exerciseId });
      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="success"
            title="Exercicio registrado no seu historico!"
            onClose={() => toast.close(id)}
          />
        ),
      });
      navigation.navigate("history");
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Nao foi possivel carregar os exercicios.";
      toast.show({
        placement: "top",
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setSubmitting(false);
    }
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetchExercise();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="$gray600" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="$gray100"
            fontFamily="$heading"
            flexShrink={1}
            fontSize="$lg"
          >
            {exerciseDetails.name}
          </Heading>
          <HStack alignItems="center">
            <BodySvg />
            <Text color="$gray200" ml="$1" textTransform="capitalize">
              {exerciseDetails.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
          <VStack p="$8">
            <Box rounded="$lg" overflow="hidden" mb="$3">
              <Image
                source={{
                  uri: `${api.defaults.baseURL}/exercise/demo/${exerciseDetails.demo}`,
                }}
                alt="Imagem do Exercicio"
                mb="$3"
                resizeMode="cover"
                w="$full"
                h="$80"
              />
            </Box>
            <Box bg="$gray600" rounded="$md" pb="$4" px="$4">
              <HStack
                alignItems="center"
                justifyContent="space-around"
                mb="$6"
                mt="$5"
              >
                <HStack>
                  <SeriesSvg />
                  <Text ml="$2" color="$gray200">
                    {exerciseDetails.series} series
                  </Text>
                </HStack>
                <HStack>
                  <RepetitionSvg />
                  <Text ml="$2" color="$gray200">
                    {exerciseDetails.repetitions} repeticoes
                  </Text>
                </HStack>
              </HStack>
              <Button
                title="Marcar como realizado"
                onPress={handleExerciseHisytoryRegister}
                isLoading={submitting}
              />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}
