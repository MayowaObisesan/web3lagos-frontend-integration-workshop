import { useWriteContract } from "wagmi";
import tokenAbi from "../abis/token.json";
import { TOKEN_CONTRACT_ADDRESS } from "../constant";
import { useState } from "react";

export default function TransferPage() {
  const { writeContract, data, isPending, isSuccess } = useWriteContract();
  const [transferAddress, setTransferAddress] = useState<string>("");
  const [transferAmount, setTransferAmount] = useState<string>("");
  const [transferSettled, setTransferSettled] = useState<boolean>(false);

  const handleTransfer = () => {
    writeContract(
      {
        abi: tokenAbi,
        address: TOKEN_CONTRACT_ADDRESS,
        functionName: "transfer",
        args: [transferAddress, Number(transferAmount)],
      },
      {
        onSuccess(data, variables, context) {
          // toast.success("Your transfer is completed")
        },
        onSettled(data, error, variables, context) {
          // console.log()
          setTransferSettled(true);
        },
      }
    );
  };

  return (
    <section>
      {isPending && <div>Transfer is Loading</div>}
      {isSuccess && <div>Transfer is Successful</div>}
      {transferSettled && <div>Transfer has been confirmed</div>}
      <div>
        <input
          title="Transfer address field"
          type="text"
          placeholder="Enter address to transfer to"
          onChange={(e) => setTransferAddress(e.target.value)}
        />
      </div>

      <div>
        <input
          title="Transfer amount field"
          type="text"
          placeholder="Enter amount to transfer"
          onChange={(e) => setTransferAmount(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleTransfer}>
        Transfer
      </button>
    </section>
  );
}
