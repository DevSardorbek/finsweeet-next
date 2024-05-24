import Bosiness from "@/components/business/Bosiness";
import BusinessCard from "@/components/businessCard/BusinessCard";
import React from "react";
async function getData() {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Blog() {
  const product = await getData();
  console.log(product);
  return (
    <div>
      <Bosiness />
      <BusinessCard product={product} />
    </div>
  );
}
