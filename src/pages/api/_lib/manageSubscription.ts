import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string,
  createdAction = false
) {
  // buscar o usuario no banco do fauna com o id customer id
  // salvar os dados da subscription no faunadb

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_stripe_customer_id"), customerId))
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };

  if (createdAction) {
    await fauna.query(
      q.Create(q.Collection("subscriptions"), { data: subscriptionData })
    )
  } else {
    await fauna.query(
      q.Replace(
        q.Select(
          "Ref",
          q.Get(
            q.Match(
              q.Index("subscription_by_id"), 
              subscriptionId,
              )
          )
        ),

        { data: subscriptionData }
      )
    )
  }
}