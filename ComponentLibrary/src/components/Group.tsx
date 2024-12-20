import { ComponentProps } from "react";
import { Text, Button } from "@gluestack-ui/themed";

type Props = ComponentProps<typeof Button> & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Button
      bg="$gray600"
      minWidth="$24"
      h="$10"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      borderColor="$green500"
      borderWidth={isActive ? 1 : 0}
      sx={{ ":active": { borderWidth: 1 } }}
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontFamily="$heading"
        fontSize="$sm"
      >
        {name}
      </Text>
    </Button>
  );
}
