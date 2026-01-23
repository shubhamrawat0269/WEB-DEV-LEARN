export const categories = [
  "Food",
  "Entertainment",
  "Utilities",
  "Health",
  "Technology",
  "Travel",
  "Education",
];

export const inputValidConfig = {
    title: [{ required: true, message: "Title field is required" }],
    category: [{ required: true, message: "Category field is required" }],
    amount: [{ required: true, message: "Amount field is required" }],
};