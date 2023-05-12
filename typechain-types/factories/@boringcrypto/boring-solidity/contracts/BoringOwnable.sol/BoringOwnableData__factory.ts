/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  BoringOwnableData,
  BoringOwnableDataInterface,
} from "../../../../../@boringcrypto/boring-solidity/contracts/BoringOwnable.sol/BoringOwnableData";

const _abi = [
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608080604052346100155760b9908161001b8239f35b600080fdfe6080806040526004361015601257600080fd5b600090813560e01c9081638da5cb5b14605d575063e30c397814603457600080fd5b34605a5780600319360112605a576001546040516001600160a01b039091168152602090f35b80fd5b905034607f5781600319360112607f5790546001600160a01b03168152602090f35b5080fdfea26469706673582212207fd52a93b0a36402acd7fe71c41a63fcea58b177ad8c4d32421ef6b48c9b916f64736f6c63430008120033";

type BoringOwnableDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoringOwnableDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoringOwnableData__factory extends ContractFactory {
  constructor(...args: BoringOwnableDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BoringOwnableData> {
    return super.deploy(overrides || {}) as Promise<BoringOwnableData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BoringOwnableData {
    return super.attach(address) as BoringOwnableData;
  }
  override connect(signer: Signer): BoringOwnableData__factory {
    return super.connect(signer) as BoringOwnableData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoringOwnableDataInterface {
    return new utils.Interface(_abi) as BoringOwnableDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringOwnableData {
    return new Contract(address, _abi, signerOrProvider) as BoringOwnableData;
  }
}
