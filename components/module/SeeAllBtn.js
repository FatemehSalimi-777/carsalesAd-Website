import Link from "next/link";
import styles from "./SeeAllBtn.module.css";

function SeeAllBtn() {
  return (
    <div className={styles.container}>
      <Link href="/cars">See All Cars</Link>
    </div>
  );
}

export default SeeAllBtn;
