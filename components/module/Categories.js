import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.container}>
      <div>
        <Link href="/categories/sedan">
          <p>Sedan</p>
          <Sedan />
        </Link>
      </div>
      <div>
        <Link href="/categories/suv">
          <p>SUV</p>
          <Suv />
        </Link>
      </div>
      <div>
        <Link href="/categories/hatchback">
          <p>Hatchback</p>
          <Hatchback />
        </Link>
      </div>
      <div>
        <Link href="/categories/sport">
          <p>Sport</p>
          <Sport />
        </Link>
      </div>
    </div>
  );
}

export default Categories;
