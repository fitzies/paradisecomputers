"use server";

import { cookies } from "next/headers";

async function create(formData: FormData) {
  const product = formData.get("name");
  const count = Number(formData.get("count"));

  const cookiesList = cookies();
  let cart = cookiesList.get("cart")?.value;

  if (!product) {
    console.log("No product");
    return;
  }

  if (cart) {
    const productsToAdd = (product.toString() + " ").repeat(count).trim();
    cart = cart + " " + productsToAdd;
    cookiesList.set("cart", cart, {
      path: "/",
      maxAge: 1000000,
    });
  } else {
    let productValue = product.toString();
    cookiesList.set("cart", productValue, {
      path: "/",
      maxAge: 1000000,
    });
    console.log("Added to an empty cart");
  }

  const newCart = cookiesList.get("cart");
  console.log(newCart);
}

export { create };
