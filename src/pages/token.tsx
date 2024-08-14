import { useAccount, useReadContract } from "wagmi";
import tokenAbi from "../abis/token.json";
import { TOKEN_CONTRACT_ADDRESS } from "../constant";

export default function TokenDetails() {
  const { address } = useAccount();

  // Fetch tokenSupply
  const { data: tokenSupplyData, isLoading: tokenSupplyLoading } =
    useReadContract({
      abi: tokenAbi,
      address: TOKEN_CONTRACT_ADDRESS,
      functionName: "totalSupply",
    });

  // Fetch TokenName
  const { data: tokenNameData } = useReadContract({
    abi: tokenAbi,
    address: TOKEN_CONTRACT_ADDRESS,
    functionName: "name",
  });

  // Fetch TokenOwner
  const { data: tokenOwnerData } = useReadContract({
    abi: tokenAbi,
    address: TOKEN_CONTRACT_ADDRESS,
    functionName: "owner",
  });

  // Fetch TokenBalanceOf
  const { data: tokenBalanceOfData } = useReadContract({
    abi: tokenAbi,
    address: TOKEN_CONTRACT_ADDRESS,
    functionName: "balanceOf",
    args: [address],
  });

  if (tokenSupplyLoading) {
    return <div>Loading token...</div>;
  }

  return (
    <section>
      <h1>Token Details</h1>
      <div>Token Supply: {tokenSupplyData?.toString()}</div>
      <div>Token Name: {tokenNameData?.toString()}</div>
      <div>Token Owner: {tokenOwnerData?.toString()}</div>
      <div>Token Balance Of: {tokenBalanceOfData?.toString()}</div>
    </section>
  );
}
