let carsBrands = [
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
let carsModels = {
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
  let arr = [];
  let i = 0;
  while (i < n) {
    let brandNumber = Math.floor(Math.random() * carsBrands.length);
    let carBrand = carsBrands[brandNumber];
    let modelNumber = Math.floor(Math.random() * carsModels[carBrand].length);
    let carModel = carsModels[carBrand][modelNumber];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    arr.push([carBrand + " " + carModel, color]);
    i++;
  }
  return arr;
}
