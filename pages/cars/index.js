import AllCarsPage from "@/components/templates/AllCarsPage";
import carsData from "../../data/carsData";
import Categories from "@/components/module/Categories";
import SearchBar from "@/components/module/SearchBar";

function AllCars() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllCarsPage data={carsData} />
    </div>
  );
}

export default AllCars;
