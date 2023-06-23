import styles from "../styles/Door.module.css";
import Gift from "./Gift";

export default function Door() {
  const door = props.value;
  const selected = door.selected && !door.opened ? styles.selected : "";

  const changeSelection = (e) => props.onChange(door.changeSelection());
  const open = (e) => {
    e.stopPropagation();
    props.onChange(door.open());
  };

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>{door.number}</div>
        <div className={styles.knob} onClick={open}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={changeSelection}>
      <div className={`${styles.structure} ${selected}`}>
        {door.closed ? renderDoor() : door.haveGift ? <Gift /> : false}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
