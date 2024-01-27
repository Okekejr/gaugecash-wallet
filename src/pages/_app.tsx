import theme from "@/theme";
import { FontFaces } from "@/theme/Fonts";
import { HeroImage } from "@/ui/components/heroImage";
import { Layout } from "@/ui/components/layout";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { polygon, polygonMumbai } from "viem/chains";
import { WagmiProvider, createConfig, http } from "wagmi";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
const queryClient = new QueryClient();

const config = createConfig({
  chains: [polygonMumbai, polygon],
  connectors: [
    injected({ target: "metaMask" }),
    walletConnect({
      projectId,
      showQrModal: true,
      qrModalOptions: { themeMode: "light" },
    }),
    coinbaseWallet({
      appName: "Gaugecash Wallet",
      chainId: polygon.id,
    }),
  ],
  transports: {
    [polygon.id]: http(
      `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`,
      {
        key: process.env.NEXT_PUBLIC_ALCHEMY_KEY,
        name: "Alchemy HTTP Provider",
      }
    ),
    [polygonMumbai.id]: http(
      `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY_MUMBAI}`,
      {
        key: process.env.NEXT_PUBLIC_ALCHEMY_KEY_MUMBAI,
        name: "Alchemy HTTP Provider",
      }
    ),
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <FontFaces />
            <HeroImage />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}
