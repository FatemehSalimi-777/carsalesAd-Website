import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";
import SeeAllBtn from "@/components/module/SeeAllBtn";
import AllCarsPage from "@/components/templates/AllCarsPage";
import carsData from "@/data/carsData";

export default function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <SeeAllBtn />
      <AllCarsPage data={cars} />
    </div>
  );
}
