"use server";

import { cookies } from "next/headers";
import { removeString } from "./lib";

async function create(formData: FormData) {
  const product = formData.get("name");
  // const count = Number(formData.get("count"));

  const cookiesList = cookies();
  let cart = cookiesList.get("cart")?.value;

  if (!product) {
    console.log("No product");
    return;
  }

  if (cart) {
    const productsToAdd = (product.toString() + " ") /*.repeat(count)*/
      .trim();
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

async function removeItem(formData: FormData) {
  const product = formData.get("name");

  const cookiesList = cookies();
  let cart = cookiesList.get("cart")?.value;

  if (!cart || !product) return;

  const result = removeString(cart, product.toString());
  if (result.length <= 1) {
    cookiesList.set("cart", result, {
      path: "/",
      maxAge: 0,
    });
  } else {
    cookiesList.set("cart", result, {
      path: "/",
      maxAge: 1000000,
    });
  }
}

export { create, removeItem };
