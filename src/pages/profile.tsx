import { useAccount } from "wagmi";

export default function Profile() {
  const account = useAccount();

  return (
    <section>
      <div>Account details:</div>
      <div>Address: {account.address}</div>
      <div>Chain ID: {account.chainId}</div>
      <div>Chain Name: {account.chain?.name}</div>
    </section>
  );
}
