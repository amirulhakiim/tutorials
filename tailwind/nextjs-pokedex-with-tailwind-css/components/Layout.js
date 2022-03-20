import React from "react";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/pokemon-logo.png" />
      </Head>
      <main className="container mx-auto max-w-sm md:max-w-xl p-2 min-h-screen">
        {children}
      </main>
    </div>
  );
}
