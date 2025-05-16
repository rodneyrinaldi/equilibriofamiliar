import { useRouter } from "next/router";
import styles from "./index.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      Carregando...
    </div>
  );
}
