"use client";

import dynamic from "next/dynamic";

// Dynamically import client components to avoid SSR mismatch
const Quality = dynamic(() => import("./_components/Quality"), { ssr: false });
const Product = dynamic(() => import("./_components/Product"), { ssr: false });

export default function HomeClient({ data }: { data: { bgColor: string; img: string; season: string }[] }) {
  return (
    <>
      {data.map((item, i) => (
        <div key={i}>
          <Quality bgColor={item.bgColor} img={item.img} />
          <Product season={item.season} />
        </div>
      ))}
    </>
  );
}