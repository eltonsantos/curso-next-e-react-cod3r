import styles from "../../../styles/Game.module.css";
import { useEffect, useState } from "react";
import Door from "../../../components/Door";
import { updateDoors, createDoors } from "../../../functions/doors";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;

    const qtdDoorsValid = doors >= 3 && doors <= 100;
    const hasGiftValid = hasGift >= 1 && hasGift <= doors;

    setValid(qtdDoorsValid && hasGiftValid);
  }, [doors, router.query.doors, router.query.hasGift]);

  useEffect(() => {
    const doors = +router.query.doors;
    const hasGift = +router.query.hasGift;
    setDoors(createDoors(doors, hasGift));
  }, [router?.query]);

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={(newDoor) =>
            setDoors(updateDoors(doors, newDoor))
          }
        />
      );
    });
  }
  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ? renderDoors() : <h1>Valores inválidos</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href="/" passHref>
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  );
}
