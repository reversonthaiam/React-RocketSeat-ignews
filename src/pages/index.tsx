import Head from "next/head";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import { GetStaticProps } from "next";
import { stripe } from "../services/stripe";


interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | Ig.News</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏻 Hey, welcome</span>
          <h1>
            News about the <span>React </span>world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>For {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId}></SubscribeButton>
        </section>
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  );
}



export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1IxzP6HEFLOC4o2Iu9USYSBj");

  const product = {
    price: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
      
    },
    revalidate: 60 * 60 * 24,
  };
};
