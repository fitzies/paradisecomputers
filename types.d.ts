type Product = {
  Name: string;
  Description: string;
  Price: string;
  Image: string;
};

interface CartItem {
  Product: string;
  Price: number;
  Quantity: number;
  Total: number;
}
