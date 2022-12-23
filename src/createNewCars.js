let cartsToGenerate = [
  "Volkswagen Passat",
  "Volkswagen Polo",
  "Volkswagen Getta",
  "Volkswagen Golf",
  "Volkswagen Tauran",
  "Volkswagen Tiguan",
  "Volkswagen Transporter",
  "Kia Sorento",
  "Kia Ceeds",
  "Kia Sportage",
  "Kia Carnival",
  "Nissan Leaf",
  "Nissan Rogue",
  "Nissan Juke",
  "Nissan Qashqai",
  "BMW X5",
  "BMW X7",
  "BMW X6",
  "BMW X3",
  "Audi a3",
  "Audi a4",
  "Audi a6",
  "Audi q3",
  "Audi tt",
  "Volvo v40",
  "Volvo s60",
  "Mazda 3",
  "Mazda 6",
  "Mazda CX-5",
  "Ford Fiesta",
  "Ford Mondeo",
  "Ford Focus",
  "Toyota Camry",
  "Toyota Rav4",
];
export function createNewCars() {
  let arr = [];
  let i = 0;
  while (i < 100) {
    let number = Math.floor(Math.random() * cartsToGenerate.length);
    let car = cartsToGenerate[number];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    arr.push([car, color]);
    i++;
  }
  return arr;
}
