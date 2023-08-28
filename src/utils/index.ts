import { faker } from '@faker-js/faker';
import { Product } from '../interface';






function getRandomStringFromArray(strings: string[]): string {
  // if (strings.length === 0) {
  //   return undefined; // Retorna undefined si el array está vacío
  // }
  const randomIndex = Math.floor(Math.random() * strings.length);
  return strings[randomIndex];
}


const categories = ['Ropa', 'Electrodomesticos', 'Muebles', 'Juguetes', 'Otros'];








// Generar datos falsos de productos
const generateFakeProducts = (count: number): Product[] => {
  const fakeProducts: Product[] = [];

  for (let i = 1; i <= count; i++) {
    const product: Product = {
      id: i,
      title: faker.commerce.productName(),
      price: faker.number.float({ min: 10, max: 100, precision: 0.01 }),
      description: faker.lorem.paragraph(),
      category: {
        id: faker.number.int({ min: 1, max: 10 }),
        name: getRandomStringFromArray(categories),
        image: faker.image.url(),
      },
      images: [
        faker.image.url(),
        faker.image.url(),
        faker.image.url(),
      ],
    };

    fakeProducts.push(product);
  }

  return fakeProducts;
};

export default generateFakeProducts;
