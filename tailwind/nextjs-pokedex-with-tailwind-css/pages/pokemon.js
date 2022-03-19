import React from "react";
import Layout from "../components/Layout";
import Link from 'next/link'
import Image from "next/image";

export default function pokemon({ pokeman }) {
  console.log(pokeman);
  return (
    <Layout title={pokeman.name}>
      <h1 className="text-4xl mb-2 text-center capitalize">{pokeman.name}</h1>
      <div className="mx-auto w-60 h-60 relative">
        <Image src={pokeman.image} alt={pokeman.name} layout="fill"></Image>
      </div>
      <p>
        <span className="font-bold mr-2 mx-auto">Weight: </span>
        {pokeman.weight}
      </p>
      <p>
        <span className="font-bold mr-2 mx-auto">Height: </span>
        {pokeman.height}
      </p>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json();
    const paddedIndex = ("00" + id).slice(-3);
    pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`;
    return {
      props: { pokeman },
    };
  } catch (err) {
    console.log(err);
  }
}
