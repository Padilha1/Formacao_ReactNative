import {
  Center,
  Image,
  Text,
  VStack,
  Heading,
  ScrollView,
} from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { useNavigation } from "@react-navigation/native";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt="Pessoas Treinando"
          w="100%"
          h={625}
          position="absolute"
        />
        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />
            <Text color="$gray100" fontSize="$sm">
              {" "}
              Treine sua mente e seu corpo.
            </Text>
          </Center>

          <Center flex={1} gap="$2">
            <Heading color="$gray100">Crie sua Conta</Heading>

            <Input placeholder="Nome" />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" type="password" secureTextEntry />
            <Button title="Criar e acessar " />
          </Center>

          <Button
            title="Fazer Login"
            variant="outline"
            mt="$12"
            onPress={() => navigation.goBack()}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
