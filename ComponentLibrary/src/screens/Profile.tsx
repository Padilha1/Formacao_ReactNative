import * as ImagePicker from "expo-image-picker";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { VStack, Text, Center, Heading, useToast } from "@gluestack-ui/themed";
import { ScrollView, TouchableOpacity } from "react-native";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useState } from "react";
import FileSystem from "expo-file-system";
import { ToastMessage } from "@components/ToastMessage";

export function Profile() {
  const [userPhoto, setUserPhoto] = useState("https://github.com/Padilha1.png");
  const toast = useToast();
  async function handleuserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });
      if (photoSelected.canceled) return;
      const photoUri = photoSelected.assets[0].uri;
      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };
        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            placement: "top",
            render: ({ id }) => (
              <ToastMessage
                id={id}
                action="error"
                title="Esta imagem e muito grande. Escolha ate 5MB."
                onClose={() => toast.close(id)}
              />
            ),
          });
        }
        setUserPhoto(photoSelected.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{ uri: userPhoto }}
            alt="Foto de Perfil do Usuario"
            size="xl"
          />
          <TouchableOpacity onPress={handleuserPhotoSelect}>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
            >
              Alterar Foto
            </Text>
          </TouchableOpacity>

          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="$gray600" />
            <Input value="emailteste@gmail.com" bg="$gray600" isReadOnly />
          </Center>
          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="$gray200"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            {" "}
            Alterar Senha
          </Heading>
          <Center gap="$4" w="$full">
            <Input placeholder="Senha antiga" bg="$gray600" secureTextEntry />
            <Input placeholder="Nova Senha" bg="$gray600" secureTextEntry />
            <Input
              placeholder="Confirme a Senha"
              bg="$gray600"
              secureTextEntry
            />
            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
