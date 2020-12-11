import { StatusBar } from "expo-status-bar";
import React from "react";
import { ApolloProvider } from '@apollo/client';
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";

import Navigation from "./src/navigation";
import { apollo } from "./src/api/apollo";
import { StoreProvider } from "./src/store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <StoreProvider>
        <ApolloProvider client={apollo}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </ApolloProvider>
      </StoreProvider>
      
    );
  }
}
