const productList: string[] = [];
const productPrice: Array<number> = [];

productList.push("Potato");
productPrice.push(30);

type productDetails = {
  product: string;
  price: number;
};

// const productDetails: productDetails[] = [];
const productDetails: Array<productDetails> = [];
productDetails.push({ product: "Dhaniya", price: 40 });

const allUsers: string[][] = [
  ["Breakfast", "Dinner"],
  ["Breakfast", "Lunch", "Snacks"],
];

allUsers.push(["Breakfast", "Dinner", "lunch", "Eve Snacks"]);

export {};
