import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function pokemon({ pokeman }) {
  console.log(pokeman);
  return (
    <Layout title={pokeman.name}>
      <div className="container mx-auto bg-gray-200 p-4 mt-4 rounded-xl shadow-md hover:bg-gray-100">
        <h1 className="text-4xl mb-2 text-center capitalize">{pokeman.name}</h1>
        <div className="mx-auto w-32 h-32 md:w-60 lg:h-60 relative">
          <Image src={pokeman.image} alt={pokeman.name} layout="fill"></Image>
        </div>
        <p>
          <span className="font-semibold mr-2 mx-auto">Weight: </span>
          {pokeman.weight} cm
        </p>
        <p>
          <span className="font-semibold mr-2 mx-auto">Height: </span>
          {pokeman.height} kg
        </p>
        <h2 className="font-bold text-2xl mt-6 mb-2">Types</h2>
        {pokeman.types.map((type, index) => (
          <p key={index} className="font-semibold">
            {type.type.name}
          </p>
        ))}
        <p className="mt-10 text-center">
          <Link href="/">
            <a className="text-2xl underline">Home</a>
          </Link>
        </p>
      </div>
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
