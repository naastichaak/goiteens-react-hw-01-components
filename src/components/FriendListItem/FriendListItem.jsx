import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.statuus_true : styles.statuus_false}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.namee}>{name}</p>
    </li>
  );
}

export default FriendListItem;
