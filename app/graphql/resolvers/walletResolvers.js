import { Wallet } from "../index";
import { Transaction } from "../index";
import { Request } from "../index";

export const walletMutations = {
  pay: async (
    _source,
    { amount, req_id, payer_wallet_id, payed_wallet_id, payment_method },
  ) => {
    const request = await Request.find({ where: { id: req_id } });

    if (!request[0].payment_method) {
      const { transactions } = await Transaction.create({
        input: [{ amount }],
      });
      await Wallet.update({
        where: { id: payer_wallet_id },
        update: {
          amount_SUBTRACT: amount,
          tranz_from: {
            connect: { where: { node: { id: transactions[0].id } } },
          },
        },
      });
      await Wallet.update({
        where: { id: payed_wallet_id },
        update: {
          amount_ADD: amount,
          tranz_to: {
            connect: { where: { node: { id: transactions[0].id } } },
          },
        },
      });
      await Request.update({
        where: { id: req_id },
        update: {
          payment_method,
          trans: {
            connect: { where: { node: { id: transactions[0].id } } },
          },
        },
      });
      return transactions[0].id;
    }
    return "The Payment Done From Before";
  },
};
