const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
};

const getLength = (value: String | any[]): number => {
  return value.length;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const filterByRating = (
  bookList: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return bookList.filter((book) => book.rating >= 4);
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (userList: User[]): User[] => {
  return userList.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = (arr1: any[], arr2: any[]): any[] => {
  const setOfValues = new Set([...arr1, ...arr2]);
  return Array.from(setOfValues);
};

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (productList: Product[]): number => {
  return productList.reduce((total, product: Product) => {
    return product.discount
      ? total + product.price * product.quantity
      : total + product.price * product.quantity;
  }, 0);
};
