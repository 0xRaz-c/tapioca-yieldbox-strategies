/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AaveStrategy,
  AaveStrategyInterface,
} from "../../../contracts/aave/AaveStrategy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IYieldBox",
        name: "_yieldBox",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lendingPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "_incentivesController",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiptToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_multiSwapper",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountQueued",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "AmountWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_old",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_new",
        type: "uint256",
      },
    ],
    name: "DepositThreshold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_old",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_new",
        type: "address",
      },
    ],
    name: "MultiSwapper",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "cheapWithdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "compound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "compoundAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractAddress",
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
    name: "currentBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "depositThreshold",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposited",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "description_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "result",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "incentivesController",
    outputs: [
      {
        internalType: "contract IIncentivesController",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lendingPool",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
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
  {
    inputs: [],
    name: "receiptToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDepositThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_swapper",
        type: "address",
      },
    ],
    name: "setMultiSwapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedRewardToken",
    outputs: [
      {
        internalType: "contract IStkAave",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "swapper",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenType",
    outputs: [
      {
        internalType: "enum TokenType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawable",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wrappedNative",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldBox",
    outputs: [
      {
        internalType: "contract IYieldBox",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61018060409080825234620003ef5760c08162002ecf8038038091620000268285620003f4565b833981010312620003ef5780516001600160a01b0392908381168103620003ef57602091620000578385016200042e565b92620000658286016200042e565b9562000074606087016200042e565b936200009160a06200008960808a016200042e565b98016200042e565b906080528560a0528160018060a01b03199881600093338c8654161785558188519a33877f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08180a360016002551660c05216809a6003541617600355169782610140968a88521698610160978a895285816004816399248ea760e01b9e8f82525afa908115620003e557869186918691620003a0575b50169a8b60e05260048851809d819382525afa998a156200039657839a62000353575b50836101009a168a5283610120991689528360c0511693865163095ea7b360e01b9283825260048201528681604481886000199a8b60248401525af18015620003495760449288959492879262000327575b508d5116895197889586948552600485015260248401525af19081156200031c5750620002e7575b50505192612a7194856200045e863960805185818161020b01528181610d95015261166b015260a051856101b3015260c05185818161026601528181610d2301528181610ff1015281816110ff01528181611b97015281816125c2015281816127660152612876015260e0518581816104a801528181610eb501528181611a8b01528181612244015261253101525184818161016c015281816103fe01528181610dfe015281816119e90152612595015251838181610ad001528181610c6a015281816115550152611fdb0152518281816105c10152818161078701528181610f90015281816112120152818161170801528181611cb00152818161271501526128f301525181818161044801528181610e60015281816116c40152611a370152f35b816200030b92903d1062000314575b620003028183620003f4565b81019062000443565b503880620001c4565b503d620002f6565b8451903d90823e3d90fd5b6200034190873d89116200031457620003028183620003f4565b50386200019c565b88513d87823e3d90fd5b9099508481813d83116200038e575b6200036e8183620003f4565b810103126200038a5762000382906200042e565b98386200014a565b8280fd5b503d62000362565b86513d85823e3d90fd5b928092508391503d8311620003dd575b620003bc8183620003f4565b81010312620003d95784620003d287926200042e565b3862000127565b8380fd5b503d620003b0565b87513d86823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b038211908210176200041857604052565b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620003ef57565b90816020910312620003ef57518015158103620003ef579056fe608060408181526004918236101561001657600080fd5b600092833560e01c9182630469018f146122305750816306fdde03146121f3578163078dfbe7146120dc57816317d70f7c146120c157816322a58c5d146119625781632b3297f91461193957816330fa738c1461191d57816348dcb051146118f95781634cce992d1461189c5781634e71e0c8146117e95781635018830114610d525781637284e41614611781578163734daaa11461175f5781638da5cb5b14611737578163a59a9973146116f3578163af1df255146116af578163afa91cc61461164e578163ce845d1d14610d52578163db2e21bc14610dc4578163de40657714610d80578163e30c397814610d57578163e3575f0514610d52578163eb6d3a1114610d0e578163ec32e1b914610c99578163ec78e83214610c55578163f3fef3a3146101e257508063f6b4dfb41461019f5763f7c618c11461015957600080fd5b3461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b5080fd5b503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8391503461019b578260031936011261019b576101fd6122bc565b6001600160a01b03610232337f000000000000000000000000000000000000000000000000000000000000000083161461281d565b61023a6129c7565b602491823593846102496126f2565b10610c135786516370a0823160e01b8082523083830152602095917f000000000000000000000000000000000000000000000000000000000000000086169187828581865afa91821561065b57908a92918392610be1575b50818a116103e3575b5050895163a9059cbb60e01b8882019081526001600160a01b038716858301908152602081018b905292938493909284916102f290829060400103601f198101835282612350565b51925af13d156103dc573d61030681612372565b906103138b519283612350565b81523d898883013e5b8161039f575b501561035d5750507f058b581e2433b8b02263f5b0e5c2889fcb7b3495112884a3147619038fba46d8939495519485521692a2600160025580f35b875162461bcd60e51b8152918201859052601c908201527f426f72696e6745524332303a205472616e73666572206661696c6564000000006044820152606490fd5b809150518681159182156103b8575b5050905089610322565b83809293500103126103d85785015180151581036103d85780868b6103ae565b8780fd5b606061031c565b90918b516103f081612334565b528a518181523086820152877f0000000000000000000000000000000000000000000000000000000000000000169089818781855afa908115610bd7578c91610baa575b508c51630cc7d40f60e11b815230888201527f00000000000000000000000000000000000000000000000000000000000000008a16908b818981855afa9081156108cf578f928f93848f948f948e9791610b6f575b50610ab1575b50935050505051637e90d7ef60e01b81523088820152897f000000000000000000000000000000000000000000000000000000000000000016908b818981855afa9081156108cf578e91610a84575b5080610a26575b508d5163091030c360e01b815230898201528b818981855afa9081156108cf578f908f926109f6575b505190858252308a8301528c828a81865afa9182156109ea578f926109bb575b50801561096957620fd20081018091116108a2574211908161095f575b50610911575b505b8c5183815230888201528a818881865afa908115610907578d916108da575b50818111610665575b5050505061058990886124e8565b8951631a4ca37b60e21b81526001600160a01b0383168582019081526020810183905230604082015288908290819060600103818d8b7f0000000000000000000000000000000000000000000000000000000000000000165af190811561065b57908a9392918491610625575b50818111610607575b9291926102aa565b9861061761061d9285949b6124e8565b906126b7565b97908b6105ff565b809450898092503d8311610654575b61063e8183612350565b8101031261064f578992518c6105f6565b600080fd5b503d610634565b8b513d8c823e3d90fd5b9061066f916124e8565b8c519161067b83612318565b600283528d368c85013761068e836123fc565b52846106998361241f565b528860035416908d80519063d06ca61f60e01b8252828a830152888201528d81806106c760448201886124ab565b0381865afa9081156108cf57906106e7918f80926108b4575b505061241f565b5160328102818104603214821517156108a257918f928f949261073f6107148d92612710899504906124e8565b9551978896879586946338ed173960e01b86528501528d84015260a0604484015260a48301906124ab565b30606483015268056bc75e2d63100000608483015203925af1801561084557610880575b508a51908152308582015287818581865afa90811561065b578a91610853575b50867f000000000000000000000000000000000000000000000000000000000000000016803b1561084f578b5163e8eda9df60e01b81526001600160a01b038516878201908152602081018490523060408201526000606082015290918c9183919082908490829060800103925af18015610845578992918c91610828575b50506105899291600080516020612a1c833981519152918d51908152a1908b808061057b565b610834919293506122d2565b6108415787908a8d610802565b8980fd5b8c513d8d823e3d90fd5b8a80fd5b90508781813d8311610879575b61086a8183612350565b8101031261064f57518b610783565b503d610860565b61089b903d808d833e6108938183612350565b81019061242f565b508b610763565b634e487b7160e01b8f5260118a52888ffd5b6108c892503d8091833e6108938183612350565b388f6106e0565b508e513d8f823e3d90fd5b90508a81813d8311610900575b6108f18183612350565b8101031261064f57518e610572565b503d6108e7565b8e513d8f823e3d90fd5b803b1561095b578c80918f8a905180948193633c3d045360e11b83525af1801561090757908d91610943575b50610551565b61094c906122d2565b610957578b8e61093d565b8b80fd5b8c80fd5b905015158f61054b565b50610975575b50610553565b803b1561095b578c80918f8a905180948193633c3d045360e11b83525af1801561090757908d916109a7575b5061096f565b6109b0906122d2565b610957578b8e6109a1565b9091508c81813d83116109e3575b6109d38183612350565b8101031261064f5751903861052e565b503d6109c9565b50508e513d8f823e3d90fd5b8092508d8092503d8311610a1f575b610a0f8183612350565b8101031261064f57518e3861050e565b503d610a05565b813b15610a80578e516309a99b4f60e41b8152308a82019081526020810192909252908e9082908190604001038183865af180156108cf57908e91610a6c575b506104e5565b610a75906122d2565b61095b578c8f610a66565b8d80fd5b90508b81813d8311610aaa575b610a9b8183612350565b8101031261064f57518f6104de565b503d610a91565b610b1995826060935195610ac4876122fc565b600187528736818901377f000000000000000000000000000000000000000000000000000000000000000016610af9876123fc565b525196879586948593633111e7b360e01b855284015260648301906124ab565b600019828f015230604483015203925af1801561090757908b91610b46575b908a8f8f8b9450819061048f565b813d8311610b68575b610b598183612350565b8101031261064f57898e610b38565b503d610b4f565b965050505091905082813d8311610ba3575b610b8b8183612350565b8101031261064f578a8f918f928e938c955138610489565b503d610b81565b90508981813d8311610bd0575b610bc18183612350565b8101031261064f57518d610434565b503d610bb7565b8d513d8e823e3d90fd5b925090508782813d8111610c0c575b610bfa8183612350565b8101031261064f57899151908c6102a1565b503d610bf0565b606490601e8560208a519362461bcd60e51b85528401528201527f4161766553747261746567793a20616d6f756e74206e6f742076616c696400006044820152fd5b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b8334610d0b576020366003190112610d0b57610cb36122bc565b81546001600160a01b039190610ccc90831633146123b1565b816003549116809282167fe36d79dcda63d47bee388b7dde8bba0b326a1b459889de48dc94dcf3504eda4b8580a36001600160a01b0319161760035580f35b80fd5b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b61238e565b50503461019b578160031936011261019b5760015490516001600160a01b039091168152602090f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b83833461019b578160031936011261019b5781546001600160a01b0390610dee90821633146123b1565b828251610dfa81612334565b52807f0000000000000000000000000000000000000000000000000000000000000000169382516370a0823160e01b808252308383015260209660249288818581855afa90811561131d578891611621575b508651630cc7d40f60e11b815230868201527f00000000000000000000000000000000000000000000000000000000000000008716908a818781855afa9081156114a857908b918b916115f2575b50611539575b50508651637e90d7ef60e01b815230868201527f00000000000000000000000000000000000000000000000000000000000000008716908a818781855afa9081156114a8578a9161150c575b50806114b2575b50875163091030c360e01b815230878201528a818781855afa9081156114a8578a9161147b575b5088519085825230888301528b828881865afa918215611353578b9261144c575b5080156113fb57620fd20081018091116113e957421190816113df575b50611396575b505b865190838252308683015289828681865afa91821561138c57899261135d575b508082116110d2575b50505050827f0000000000000000000000000000000000000000000000000000000000000000169160c085518093632fe4a15f60e21b8252308483015281865afa9182156110c857918688949261104196948293611093575b508751631a4ca37b60e21b81527f0000000000000000000000000000000000000000000000000000000000000000959095166001600160a01b031690850190815260208101929092523060408301529294859384929091839160600190565b03925af19283156110885792611059575b5051908152f35b9091508281813d8311611081575b6110718183612350565b8101031261064f57519083611052565b503d611067565b8251903d90823e3d90fd5b6110b591935060c03d81116110c1575b6110ad8183612350565b8101906126c4565b5050505050918a610fe2565b503d6110a3565b85513d88823e3d90fd5b6110db916124e8565b908651906110e882612318565b6002825287368b8401376110fb826123fc565b52857f000000000000000000000000000000000000000000000000000000000000000016918261112a8361241f565b528660035416885163d06ca61f60e01b8152828882015289878201528a818061115660448201886124ab565b0381855afa9081156113535790611174918c91611339575b5061241f565b516032810281810460321482151715611327578b9392916127106111999204906124e8565b9183896111ca8d51978896879586946338ed173960e01b86528501528c84015260a0604484015260a48301906124ab565b30606483015268056bc75e2d63100000608483015203925af1801561131d57611303575b508551918252308483015287828481845afa9182156112ca5787926112d4575b50847f00000000000000000000000000000000000000000000000000000000000000001690813b156103d857865163e8eda9df60e01b81526001600160a01b0390911685820190815260208101849052306040820152600060608201529091889183919082908490829060800103925af180156112ca57889188916112af575b5050600080516020612a1c833981519152918651908152a186808080610f89565b6112ba9192506122d2565b6112c65786868961128e565b8580fd5b86513d89823e3d90fd5b9091508781813d83116112fc575b6112ec8183612350565b8101031261064f5751908861120e565b503d6112e2565b611316903d808a833e6108938183612350565b50886111ee565b87513d8a823e3d90fd5b634e487b7160e01b8c5260118952878cfd5b61134d91503d808e833e6108938183612350565b8d61116e565b8a513d8d823e3d90fd5b9091508981813d8311611385575b6113758183612350565b8101031261064f5751908a610f80565b503d61136b565b88513d8b823e3d90fd5b803b156113db57888091878a5180948193633c3d045360e11b83525af1801561138c579089916113c7575b50610f5e565b6113d0906122d2565b6103d857878a6113c1565b8880fd5b905015158b610f58565b634e487b7160e01b8b5260118852868bfd5b50611407575b50610f60565b803b156113db57888091878a5180948193633c3d045360e11b83525af1801561138c57908991611438575b50611401565b611441906122d2565b6103d857878a611432565b9091508b81813d8311611474575b6114648183612350565b8101031261064f5751908c610f3b565b503d61145a565b90508a81813d83116114a1575b6114928183612350565b8101031261064f57518b610f1a565b503d611488565b89513d8c823e3d90fd5b813b156108415788516309a99b4f60e41b8152308882019081526020810192909252908a9082908190604001038183865af180156114a857908a916114f8575b50610ef3565b611501906122d2565b6113db57888b6114f2565b90508a81813d8311611532575b6115238183612350565b8101031261064f57518b610eec565b503d611519565b88516115a392611548826122fc565b60018252823681840137897f00000000000000000000000000000000000000000000000000000000000000001661157e836123fc565b5260608c8a8d5196879586948593633111e7b360e01b855284015260648301906124ab565b600019828d015230604483015203925af1801561138c57908a916115c9575b5080610ea0565b813d83116115eb575b6115dc8183612350565b8101031261064f57888a6115c2565b503d6115d2565b82819392503d831161161a575b6116098183612350565b8101031261064f578a90518c610e9a565b503d6115ff565b90508881813d8311611647575b6116388183612350565b8101031261064f575189610e4c565b503d61162e565b83903461019b57602036600319011261019b576116a790611699337f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03161461281d565b6116a16129c7565b35612858565b600160025580f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461019b578160031936011261019b57517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b50503461019b578160031936011261019b57905490516001600160a01b039091168152602090f35b90503461177d578260031936011261177d5760209250549051908152f35b8280fd5b50503461019b578160031936011261019b5780516117e5916117a282612318565b602782527f4141564520737472617465677920666f722077726170706564206e61746976656020830152662061737365747360c81b818301525191829182612273565b0390f35b9190503461177d578260031936011261177d576001546001600160a01b039290918383169190338390036118595750508084549384167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08680a36001600160a01b03199283161783551660015580f35b906020606492519162461bcd60e51b8352820152602060248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152fd5b90503461177d57602036600319011261177d577f3b779194d2cc7daf4de546bec10f6f325d421b2e202c11aa24e86e39845860cc8135926118e760018060a01b0386541633146123b1565b82548151908152846020820152a15580f35b50503461019b578160031936011261019b5760209061191661250b565b9051908152f35b50503461019b578160031936011261019b576020905160018152f35b50503461019b578160031936011261019b5760035490516001600160a01b039091168152602090f35b90503461177d5760209081600319360112611d605780359067ffffffffffffffff82116120bd57366023830112156120bd578482820135926119a384612372565b936119b087519586612350565b80855260249436868385010111611d605781868894018483013701015283516370a0823160e01b80825230838301526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169290919086818781875afa90811561138c578991612090575b508751630cc7d40f60e11b815230868201527f00000000000000000000000000000000000000000000000000000000000000008416908989828a81865afa8015612086578a928d91612054575b50611fba575b50508851637e90d7ef60e01b815230878201527f00000000000000000000000000000000000000000000000000000000000000008516915088818981855afa908115611353578b91611f8d575b5080611f3e575b50885163091030c360e01b8152308782015288818981855afa908115611353578b91611f11575b50895190848252308883015289828a81865afa918215611dfb578c92611ee2575b508b8115611e965750620fd2008101809111611e8457908b929142119081611e7a575b50611e34575b50505b875190828252308683015287828881885afa9182156114a8578a92611e05575b50808211611b6a578980f35b611b73916124e8565b92875190611b8082612318565b60028252883689840137611b93826123fc565b52827f0000000000000000000000000000000000000000000000000000000000000000169384611bc28361241f565b52836003541691895163d06ca61f60e01b815282888201528a898201528b8180611bef60448201866124ab565b0381875afa8015611dfb57611c0a918d91611de1575061241f565b516032810281810460321482151715611dcf579388979695938d809a611c678f9896611c3d8f97612710869a04906124e8565b9951998a97889687956338ed173960e01b875286015284015260a0604484015260a48301906124ab565b30606483015268056bc75e2d63100000608483015203925af1918215611dc5578892611dab575b5088519687918252308683015281855afa948515611da1578495611d6e575b507f00000000000000000000000000000000000000000000000000000000000000001691823b15611d6057865163e8eda9df60e01b81526001600160a01b0390921690820190815260208101859052306040820152600060608201529091839183919082908490829060800103925af18015611d6457611d4c575b5050600080516020612a1c8339815191529251908152a13880808080808080808980f35b611d55906122d2565b611d60578338611d28565b8380fd5b85513d84823e3d90fd5b86809296508195503d8311611d9a575b611d888183612350565b8101031261064f578692519338611cad565b503d611d7e565b87513d86823e3d90fd5b611dbe903d8089833e6108938183612350565b5038611c8e565b89513d88823e3d90fd5b634e487b7160e01b8d5260118952898dfd5b611df591503d808f833e6108938183612350565b3861116e565b8b513d8e823e3d90fd5b9091508781813d8311611e2d575b611e1d8183612350565b8101031261064f57519038611b5e565b503d611e13565b803b1561019b57818091888c5180948193633c3d045360e11b83525af18015611e705715611b3b57611e65906122d2565b6113db578838611b3b565b8a513d84823e3d90fd5b9050151538611b35565b634e487b7160e01b8c5260118852888cfd5b92919050611ea6575b5050611b3e565b803b1561019b57818091888c5180948193633c3d045360e11b83525af18015611e705715611e9f57611ed7906122d2565b6113db578838611e9f565b9091508981813d8311611f0a575b611efa8183612350565b8101031261064f57519038611b12565b503d611ef0565b90508881813d8311611f37575b611f288183612350565b8101031261064f575138611af1565b503d611f1e565b8a823b15610d0b578a516309a99b4f60e41b81523089820190815260208101939093529182908190604001038183865af180156113535715611aca57611f86909a919a6122d2565b9838611aca565b90508881813d8311611fb3575b611fa48183612350565b8101031261084f575138611ac3565b503d611f9a565b6120049260608d8a845194611fce866122fc565b600186528636818801378a7f000000000000000000000000000000000000000000000000000000000000000016610af9876123fc565b600019828f015230604483015203925af19081156114a857889161202b575b508089611a76565b813d831161204d575b61203e8183612350565b810103126113db578638612023565b503d612034565b928092508391503d831161207f575b61206d8183612350565b8101031261084f578989915138611a70565b503d612063565b81513d8e823e3d90fd5b90508681813d83116120b6575b6120a78183612350565b810103126113db575138611a23565b503d61209d565b8480fd5b50503461019b578160031936011261019b5751908152602090f35b9190503461177d57606036600319011261177d576120f86122bc565b916024359182151583036120bd576044359283151584036112c65760018060a01b0394859161212b8389541633146123b1565b156121d25716928315908115916121ca575b501561218f5750508083549283167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08580a36bffffffffffffffffffffffff60a01b8092161782556001541660015580f35b906020606492519162461bcd60e51b835282015260156024820152744f776e61626c653a207a65726f206164647265737360581b6044820152fd5b90503861213d565b9350505050166bffffffffffffffffffffffff60a01b600154161760015580f35b9190503461177d578260031936011261177d576117e59250805191612217836122fc565b8252634141564560e01b60208301525191829182612273565b84903461019b578160031936011261019b577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b6020808252825181830181905290939260005b8281106122a857505060409293506000838284010152601f8019910116010190565b818101860151848201604001528501612286565b600435906001600160a01b038216820361064f57565b67ffffffffffffffff81116122e657604052565b634e487b7160e01b600052604160045260246000fd5b6040810190811067ffffffffffffffff8211176122e657604052565b6060810190811067ffffffffffffffff8211176122e657604052565b6020810190811067ffffffffffffffff8211176122e657604052565b90601f8019910116810190811067ffffffffffffffff8211176122e657604052565b67ffffffffffffffff81116122e657601f01601f191660200190565b3461064f57600036600319011261064f5760206123a96126f2565b604051908152f35b156123b857565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b8051156124095760200190565b634e487b7160e01b600052603260045260246000fd5b8051600110156124095760400190565b90602090818382031261064f57825167ffffffffffffffff9384821161064f570181601f8201121561064f5780519384116122e6578360051b906040519461247985840187612350565b8552838086019282010192831161064f578301905b82821061249c575050505090565b8151815290830190830161248e565b90815180825260208080930193019160005b8281106124cb575050505090565b83516001600160a01b0316855293810193928101926001016124bd565b919082039182116124f557565b634e487b7160e01b600052601160045260246000fd5b60408051637e90d7ef60e01b815230600482015291906001600160a01b036020846024817f000000000000000000000000000000000000000000000000000000000000000085165afa9384156126ac57600094612679575b506000938061257157505050565b8294509060009161261893519161258783612318565b6002835286366020850137807f0000000000000000000000000000000000000000000000000000000000000000166125be846123fc565b52807f0000000000000000000000000000000000000000000000000000000000000000166125eb8461241f565b526003541690865180958194829363d06ca61f60e01b8452600484015289602484015260448301906124ab565b03915afa90811561266e5761263692935060009161265b575061241f565b516032810290808204603214811517156124f5576127106126589204906124e8565b90565b611df5913d8091833e6108938183612350565b83513d6000823e3d90fd5b90936020823d82116126a4575b8161269360209383612350565b81010312610d0b5750519238612563565b3d9150612686565b82513d6000823e3d90fd5b919082018092116124f557565b91908260c091031261064f5781519160208101519160408201519160608101519160a0608083015192015190565b604051632fe4a15f60e21b81523060048201526001600160a01b0360c0826024817f000000000000000000000000000000000000000000000000000000000000000085165afa9182156127e6576000926127f2575b506020602491604051928380926370a0823160e01b82523060048301527f0000000000000000000000000000000000000000000000000000000000000000165afa9081156127e6576000916127b3575b50906127ae612658926127a861250b565b926126b7565b6126b7565b906020823d82116127de575b816127cc60209383612350565b81010312610d0b5750516127ae612797565b3d91506127bf565b6040513d6000823e3d90fd5b602491925061281060209160c03d81116110c1576110ad8183612350565b5050505050929150612747565b1561282457565b60405162461bcd60e51b815260206004820152600c60248201526b09cdee840b2d2cad8c884def60a31b6044820152606490fd5b604080516370a0823160e01b81523060048201526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811694936020939092909184826024818a5afa91821561266e57600092612998575b5060045482116128ee5750507f9447d5abbf0af693ca2937bf8b1ec6a8c9dc4fbac672911c633fb31c78e5e3ca93945051908152a1565b9092507f000000000000000000000000000000000000000000000000000000000000000016803b1561064f57815163e8eda9df60e01b81526001600160a01b0396909616600487015260248601839052306044870152600060648701819052908690608490829084905af194851561298d57600080516020612a1c833981519152949561297e575b5051908152a1565b612987906122d2565b38612976565b50513d6000823e3d90fd5b90918582813d83116129c0575b6129af8183612350565b81010312610d0b57505190386128b7565b503d6129a5565b60028054146129d65760028055565b60405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606490fdfede22222b0ac0d69f2a19cd7b1443a29a5f37346640fff3506bdd6a9a9497f9d3a2646970667358221220c987009bc76aa3a315baeb1fa557102404b6811e327aaa29752a7656770bbf0464736f6c63430008120033";

type AaveStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveStrategy__factory extends ContractFactory {
  constructor(...args: AaveStrategyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lendingPool: PromiseOrValue<string>,
    _incentivesController: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AaveStrategy> {
    return super.deploy(
      _yieldBox,
      _token,
      _lendingPool,
      _incentivesController,
      _receiptToken,
      _multiSwapper,
      overrides || {}
    ) as Promise<AaveStrategy>;
  }
  override getDeployTransaction(
    _yieldBox: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _lendingPool: PromiseOrValue<string>,
    _incentivesController: PromiseOrValue<string>,
    _receiptToken: PromiseOrValue<string>,
    _multiSwapper: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _yieldBox,
      _token,
      _lendingPool,
      _incentivesController,
      _receiptToken,
      _multiSwapper,
      overrides || {}
    );
  }
  override attach(address: string): AaveStrategy {
    return super.attach(address) as AaveStrategy;
  }
  override connect(signer: Signer): AaveStrategy__factory {
    return super.connect(signer) as AaveStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveStrategyInterface {
    return new utils.Interface(_abi) as AaveStrategyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveStrategy {
    return new Contract(address, _abi, signerOrProvider) as AaveStrategy;
  }
}
