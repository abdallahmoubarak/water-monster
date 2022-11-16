import { gql } from "graphql-request";

export const createWalletMutation = gql`
  mutation ($id: ID!) {
    createWallets(
      input: {
        amount: 10000
        owner: { connect: { where: { node: { id: $id } } } }
      }
    ) {
      wallets {
        id
      }
    }
  }
`;

export const chargeWalletMutation = gql`
  mutation ($id: ID!, $amount: Float) {
    updateWallets(where: { id: $id }, update: { amount_ADD: $amount }) {
      wallets {
        amount
      }
    }
  }
`;

export const withdrawMutation = gql`
  mutation ($id: ID!, $amount: Float) {
    updateWallets(where: { id: $id }, update: { amount_SUBTRACT: $amount }) {
      wallets {
        amount
      }
    }
  }
`;
