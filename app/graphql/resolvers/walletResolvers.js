import { Wallet } from "../index";
import { Transaction } from "../index";
import { Request } from "../index";

export const walletMutations = {
  pay: async (
    _source,
    { amount, req_id, payer_wallet_id, payed_wallet_id, payment_method },
  ) => {
    const { requests } = await Request.find({ where: { id } });
    if (requests[0]) {
      const { transactions } = await Transaction.create({
        input: [{ amount }],
      });
      const peyer = await Wallet.update({
        where: { id: payer_wallet_id },
        update: {
          amount_SUBTRACT: amount,
          tranz_from: {
            connect: { where: { node: { id: transactions[0].id } } },
          },
        },
      });
      const peyed = await Wallet.update({
        where: { id: payed_wallet_id },
        update: {
          amount_ADD: amount,
          tranz_to: {
            connect: { where: { node: { id: transactions[0].id } } },
          },
        },
      });
      const request = await Request.update({
        where: { id: req_id },
        update: {
          payment_method,
          trans: {
            connect: { where: { node: { id: transactions[0].id } } },
          },
        },
      });
    }

    return transactions[0].id;
  },
};
