import Card from "../module/Card";
import styles from "./AllCarsPage.module.css";

function AllCarsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default AllCarsPage;
