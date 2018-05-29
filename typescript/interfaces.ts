interface Product {
  title: string;
  price: number;
  features: Array<Feature>;
}

interface Feature {
  type: string;
  isAvaiable: boolean;
}

let p: Product = {
  title: "pixel",
  price: 200,
  features: [
    {
      type: "wireless",
      isAvaiable: true
    }
  ]
};
