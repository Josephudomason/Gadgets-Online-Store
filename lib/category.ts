interface CategoryItem {
  Image: string;
  Name: string;
}

const category: CategoryItem[] = [
  {
    Image: "/categories/image 11.png",
    Name: "Phones"
  },
  {
    Image: "/categories/laptop.png",
    Name: "Laptops"
  },
  {
    Image: "/categories/iwatch.png",
    Name: "iWatches"
  },
  {
    Image: "/categories/earpiece.png",
    Name: "Earbuds"
  },
  {
    Image: "/categories/console.png",
    Name: "Console"
  },
  {
    Image: "/categories/speaker.png",
    Name: "Speakers"
  }
];

export { category };
export type { CategoryItem };
