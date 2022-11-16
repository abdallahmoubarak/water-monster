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
