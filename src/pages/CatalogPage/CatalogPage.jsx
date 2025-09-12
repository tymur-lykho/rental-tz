import CarList from "../../components/CarList/CarList";
import Filters from "../../components/Filters/Filters";

export default function CatalogPage() {
  const cars = [
    {
      id: "11a3ab35-07b8-4336-b06b-602cdc309f2c",
      year: 2008,
      brand: "Buick",
      model: "Enclave",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
      description:
        "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
      fuelConsumption: "10.5",
      engineSize: "3.6L V6",
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
      functionalities: [
        "Power liftgate",
        "Remote start",
        "Blind-spot monitoring",
      ],
      rentalPrice: "40",
      rentalCompany: "Luxury Car Rentals",
      address: "123 Example Street, Kiev, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit required",
      ],
      mileage: 5858,
    },
    {
      id: "324710c7-afe3-4e17-aba4-07e2b278179d",
      year: 2019,
      brand: "Volvo",
      model: "XC90",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9584-ai.jpg",
      description:
        "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
      fuelConsumption: "8.3",
      engineSize: "2.0L 4-cylinder",
      accessories: [
        "Nappa leather seats",
        "Bowers & Wilkins premium sound system",
        "Head-up display",
      ],
      functionalities: [
        "IntelliSafe advanced safety features",
        "Pilot Assist semi-autonomous driving",
        "Four-zone automatic climate control",
      ],
      rentalPrice: "50",
      rentalCompany: "Premium Auto Rentals",
      address: "456 Example Avenue, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Proof of insurance required",
      ],
      mileage: 5352,
    },
    {
      id: "11a3ab35-07b8-4336-b06b-602cdc309f2c",
      year: 2008,
      brand: "Buick",
      model: "Enclave",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9582-ai.jpg",
      description:
        "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
      fuelConsumption: "10.5",
      engineSize: "3.6L V6",
      accessories: [
        "Leather seats",
        "Panoramic sunroof",
        "Premium audio system",
      ],
      functionalities: [
        "Power liftgate",
        "Remote start",
        "Blind-spot monitoring",
      ],
      rentalPrice: "40",
      rentalCompany: "Luxury Car Rentals",
      address: "123 Example Street, Kiev, Ukraine",
      rentalConditions: [
        "Minimum age: 25",
        "Valid driver's license",
        "Security deposit required",
      ],
      mileage: 5858,
    },
    {
      id: "324710c7-afe3-4e17-aba4-07e2b278179d",
      year: 2019,
      brand: "Volvo",
      model: "XC90",
      type: "SUV",
      img: "https://ac.goit.global/car-rental-task/9584-ai.jpg",
      description:
        "The Volvo XC90 is a premium SUV that offers exceptional safety, advanced technology, and elegant design.",
      fuelConsumption: "8.3",
      engineSize: "2.0L 4-cylinder",
      accessories: [
        "Nappa leather seats",
        "Bowers & Wilkins premium sound system",
        "Head-up display",
      ],
      functionalities: [
        "IntelliSafe advanced safety features",
        "Pilot Assist semi-autonomous driving",
        "Four-zone automatic climate control",
      ],
      rentalPrice: "50",
      rentalCompany: "Premium Auto Rentals",
      address: "456 Example Avenue, Lviv, Ukraine",
      rentalConditions: [
        "Minimum age: 21",
        "Valid driver's license",
        "Proof of insurance required",
      ],
      mileage: 5352,
    },
  ];
  return (
    <>
      <Filters />
      <CarList cars={cars} />
    </>
  );
}
