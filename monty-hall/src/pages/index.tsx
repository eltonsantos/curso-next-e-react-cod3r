import styles from "../styles/Form.module.css";
import Card from "../components/Card";
import Link from "next/link";
import InputNumeric from "../components/InputNumeric";
import { useState } from "react";

export default function Form() {
  const [qtdDoors, setQtdDoors] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumeric
            text="Qtde Portas?"
            value={qtdDoors}
            onChange={(newQtd) => setQtdDoors(newQtd)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <InputNumeric
            text="Porta com Presente?"
            value={withGift}
            onChange={(newDoorWithGift) =>
              setWithGift(newDoorWithGift)
            }
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link className={styles.link} href={`/game/${qtdDoors}/${withGift}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
