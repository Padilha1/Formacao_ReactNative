import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Icon,
} from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.4}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/costas-remada-em-pe-com-barra-T.gif",
          }}
          alt="Exercicio1"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" fontFamily="$heading">
            Costas Pimba
          </Heading>
          <Text fontSize="$sm" color="$gray200" mt="$1" numberOfLines={1}>
            3 series x 12 repeticoes
          </Text>
        </VStack>
        <Icon as={ChevronRight} color="$gray300" />
      </HStack>
    </TouchableOpacity>
  );
}
