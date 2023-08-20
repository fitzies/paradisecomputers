const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("https://sheetdb.io/api/v1/xtn7nzx00kjr0", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data: Product[] = await response.json();
    return data;
  } catch (error: unknown) {
    console.error("There was a problem:", error);
    throw error; // Rethrow the error to be caught at the caller's level
  }
};

function createObjectWithModifiedNames(
  products: Product[]
): Record<string, Product> {
  const result: Record<string, Product> = {};

  products.forEach((product) => {
    const modifiedName = product.Name.replace(/\s+/g, "-").toLowerCase();
    result[modifiedName] = product;
  });

  return result;
}

const calculateCartItems = (cart: string[], products: any): CartItem[] => {
  const cartItemsMap = new Map<string, CartItem>();

  cart.forEach((item) => {
    const product = createObjectWithModifiedNames(products)[item];

    if (!cartItemsMap.has(product.Name)) {
      cartItemsMap.set(product.Name, {
        Product: product.Name,
        Price: Number(product.Price),
        Quantity: 0,
        Total: 0,
      });
    }

    const cartItem = cartItemsMap.get(product.Name);
    if (cartItem) {
      cartItem.Quantity++;
      cartItem.Total += Number(product.Price);
    }
  });

  return Array.from(cartItemsMap.values());
};

export { getProducts, createObjectWithModifiedNames, calculateCartItems };
