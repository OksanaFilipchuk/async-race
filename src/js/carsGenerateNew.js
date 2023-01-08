const carsBrands = [
  "Volkswagen",
  "Kia",
  "Nissan",
  "BMW",
  "Audi",
  "Ford",
  "Mazda",
  "Toyota",
  "Volvo",
  "Peugeot",
];
const carsModels = {
  Volkswagen: ["Passat", "Polo", "Getta", "Golf", "Tauran", "Tiguan"],
  Kia: ["Sorento", "Ceeds", "Sportage", "Carnival"],
  Nissan: ["Leaf", "Rogue", "Juke", "Qashqai"],
  BMW: ["X5", "X7", "X6", "X3"],
  Audi: ["A3", "A4", "A6", "q6", "tt"],
  Volvo: ["v40", "s60", "XC40", "XC90"],
  Mazda: ["3", "5", "CX-5", "6"],
  Ford: ["Fiesta", "Mondeo", "Focus", "MUSTANG"],
  Toyota: ["Camry", "Rav4", "Highlander", "Hilux"],
  Peugeot: ["307", "207", "5008", "3008"],
};

export function generateNewCars(n) {
  const arr = [];
  let i = 0;
  while (i < n) {
    const brandNumber = Math.floor(Math.random() * carsBrands.length);
    const carBrand = carsBrands[brandNumber];
    const modelNumber = Math.floor(Math.random() * carsModels[carBrand].length);
    const carModel = carsModels[carBrand][modelNumber];
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;
    arr.push([`${carBrand} ${carModel}`, color]);
    i += 1;
  }
  return arr;
}
