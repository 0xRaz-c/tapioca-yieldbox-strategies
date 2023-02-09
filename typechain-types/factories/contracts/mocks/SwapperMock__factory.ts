/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SwapperMock,
  SwapperMockInterface,
} from "../../../contracts/mocks/SwapperMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506106c4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806338ed17391461003b578063d06ca61f14610064575b600080fd5b61004e6100493660046104f9565b610077565b60405161005b9190610569565b60405180910390f35b61004e6100723660046105ad565b6101e6565b60606100b833308988886000818110610092576100926105f9565b90506020020160208101906100a7919061060f565b6001600160a01b031692919061024d565b848460018181106100cb576100cb6105f9565b90506020020160208101906100e0919061060f565b6001600160a01b0316637c928fe9886040518263ffffffff1660e01b815260040161010d91815260200190565b600060405180830381600087803b15801561012757600080fd5b505af115801561013b573d6000803e3d6000fd5b5050505061017c838887876001818110610157576101576105f9565b905060200201602081019061016c919061060f565b6001600160a01b03169190610376565b604080516002808252606082018352909160208301908036833701905050905086816000815181106101b0576101b06105f9565b60200260200101818152505086816001815181106101d0576101d06105f9565b6020026020010181815250509695505050505050565b6040805160028082526060808301845292602083019080368337019050509050838160008151811061021a5761021a6105f9565b602002602001018181525050838160018151811061023a5761023a6105f9565b6020026020010181815250509392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916102b19190610631565b6000604051808303816000865af19150503d80600081146102ee576040519150601f19603f3d011682016040523d82523d6000602084013e6102f3565b606091505b509150915081801561031d57508051158061031d57508080602001905181019061031d919061066c565b61036e5760405162461bcd60e51b815260206004820181905260248201527f426f72696e6745524332303a205472616e7366657246726f6d206661696c656460448201526064015b60405180910390fd5b505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916103d29190610631565b6000604051808303816000865af19150503d806000811461040f576040519150601f19603f3d011682016040523d82523d6000602084013e610414565b606091505b509150915081801561043e57508051158061043e57508080602001905181019061043e919061066c565b61048a5760405162461bcd60e51b815260206004820152601c60248201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606401610365565b5050505050565b60008083601f8401126104a357600080fd5b50813567ffffffffffffffff8111156104bb57600080fd5b6020830191508360208260051b85010111156104d657600080fd5b9250929050565b80356001600160a01b03811681146104f457600080fd5b919050565b60008060008060008060a0878903121561051257600080fd5b8635955060208701359450604087013567ffffffffffffffff81111561053757600080fd5b61054389828a01610491565b90955093506105569050606088016104dd565b9150608087013590509295509295509295565b6020808252825182820181905260009190848201906040850190845b818110156105a157835183529284019291840191600101610585565b50909695505050505050565b6000806000604084860312156105c257600080fd5b83359250602084013567ffffffffffffffff8111156105e057600080fd5b6105ec86828701610491565b9497909650939450505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561062157600080fd5b61062a826104dd565b9392505050565b6000825160005b818110156106525760208186018101518583015201610638565b81811115610661576000828501525b509190910192915050565b60006020828403121561067e57600080fd5b8151801515811461062a57600080fdfea26469706673582212205cd5e457531dad909b2847d36ad054b5ecbf9e3b89744facc11bba47a13c565a64736f6c634300080f0033";

type SwapperMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapperMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapperMock__factory extends ContractFactory {
  constructor(...args: SwapperMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapperMock> {
    return super.deploy(overrides || {}) as Promise<SwapperMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapperMock {
    return super.attach(address) as SwapperMock;
  }
  override connect(signer: Signer): SwapperMock__factory {
    return super.connect(signer) as SwapperMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapperMockInterface {
    return new utils.Interface(_abi) as SwapperMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapperMock {
    return new Contract(address, _abi, signerOrProvider) as SwapperMock;
  }
}
