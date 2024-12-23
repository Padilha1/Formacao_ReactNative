import { CityProvider } from "@contexts/CityContext";
import { ReactElement } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { render, RenderOptions } from "@testing-library/react-native";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { customRender as render, Providers };
