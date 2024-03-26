/**
 * This file is autogenerated by Scaffold-ETH.
 * You should not edit it manually or your changes might be overwritten.
 */
import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const deployedContracts = {
  31337: {
    KickStarter: {
      address: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "Err__Creating__Proposal__Failed",
          type: "error",
        },
        {
          inputs: [],
          name: "Err__Donation__Fails",
          type: "error",
        },
        {
          inputs: [],
          name: "Err__Profit__Withdraw__Failed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "Err__Renewing__Proposal__Failed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "Err__Updating__Proposal__Failed",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "message",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "date",
              type: "uint256",
            },
          ],
          name: "Evt__Comments",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "expiryTime",
              type: "uint256",
            },
          ],
          name: "Evt__Contract__Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
          ],
          name: "Evt__Contract__Update__Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "donatorAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Evt__Donation",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAdddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Evt__Donation__Withdraw",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "Evt__Fund__Withdrawed",
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
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Evt__Profit__Withdraw",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "renewedDate",
              type: "uint256",
            },
          ],
          name: "Evt__Renewed",
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
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "message",
              type: "string",
            },
          ],
          name: "comments",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "contractBalance",
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
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              internalType: "string",
              name: "details",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "donation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "fundRaised",
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
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "getFundWanted",
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
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "getProposedIdea",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "proposalName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "idea",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "details",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "budgetInEth",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "date",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "expiryDate",
                  type: "uint256",
                },
              ],
              internalType: "struct Proposal.IdeaProposed",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
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
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "pauseContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "projectOwner",
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
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "renewProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
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
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              internalType: "string",
              name: "details",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
          ],
          name: "updateProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "withdrawDonation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "withdrawFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawProfit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
  },
  11155111: {
    KickStarter: {
      address: "0x566D659E18B683B467A2e6534880232d46E00E00",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "Err__Creating__Proposal__Failed",
          type: "error",
        },
        {
          inputs: [],
          name: "Err__Donation__Fails",
          type: "error",
        },
        {
          inputs: [],
          name: "Err__Profit__Withdraw__Failed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "Err__Renewing__Proposal__Failed",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "Err__Updating__Proposal__Failed",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "message",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "date",
              type: "uint256",
            },
          ],
          name: "Evt__Comments",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "expiryTime",
              type: "uint256",
            },
          ],
          name: "Evt__Contract__Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
          ],
          name: "Evt__Contract__Update__Deployed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "donatorAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Evt__Donation",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAdddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Evt__Donation__Withdraw",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "Evt__Fund__Withdrawed",
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
            {
              indexed: false,
              internalType: "uint256",
              name: "timestamp",
              type: "uint256",
            },
          ],
          name: "Evt__Profit__Withdraw",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "renewedDate",
              type: "uint256",
            },
          ],
          name: "Evt__Renewed",
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
          stateMutability: "payable",
          type: "fallback",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "message",
              type: "string",
            },
          ],
          name: "comments",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "contractBalance",
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
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              internalType: "string",
              name: "details",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
          ],
          name: "createProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "donation",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "fundRaised",
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
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "getFundWanted",
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
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "getProposedIdea",
          outputs: [
            {
              components: [
                {
                  internalType: "string",
                  name: "proposalName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "idea",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "details",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "budgetInEth",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "date",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "expiryDate",
                  type: "uint256",
                },
              ],
              internalType: "struct Proposal.IdeaProposed",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
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
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "pauseContract",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "projectOwner",
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
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "renewProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
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
              name: "contractAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "proposalName",
              type: "string",
            },
            {
              internalType: "string",
              name: "idea",
              type: "string",
            },
            {
              internalType: "string",
              name: "details",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "budgetInEth",
              type: "uint256",
            },
          ],
          name: "updateProposal",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "withdrawDonation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "contractAddress",
              type: "address",
            },
          ],
          name: "withdrawFunds",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawProfit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          stateMutability: "payable",
          type: "receive",
        },
      ],
      inheritedFunctions: {
        owner: "@openzeppelin/contracts/access/Ownable.sol",
        renounceOwnership: "@openzeppelin/contracts/access/Ownable.sol",
        transferOwnership: "@openzeppelin/contracts/access/Ownable.sol",
      },
    },
  },
} as const;

export default deployedContracts satisfies GenericContractsDeclaration;
