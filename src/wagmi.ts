import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3Lagos Frontend Integration',
  projectId: '7f49c7e89e54528522eef8334c58506e', // For walletConnect integration
  chains: [
    sepolia,
    base,
    mainnet,
    polygon
  ],
  ssr: true,
});