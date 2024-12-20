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
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

type FormDataProps = {
  email: string;
  password: string;
};
const signInSchema = yup.object({
  email: yup.string().required("Informe o email.").email("Email invalido"),
  password: yup
    .string()
    .required("Informe a senha.")
    .min(6, "Senha deve ter pelo menos 6 digitos"),
});
export function Signin() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({ resolver: yupResolver(signInSchema) });

  function handleSignIn({ email, password }: FormDataProps) {
    console.log(email, password);
  }

  function handleNewAccount() {
    navigation.navigate("signUp");
  }
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

          <Center gap="$2">
            <Heading color="$gray100">Acesse sua Conta</Heading>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  type="password"
                  secureTextEntry
                  value={value}
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />
            <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
          </Center>
          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
              Não tem uma conta? Cadastre-se
            </Text>
            <Button
              title="Criar Conta"
              variant="outline"
              onPress={handleNewAccount}
            />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
