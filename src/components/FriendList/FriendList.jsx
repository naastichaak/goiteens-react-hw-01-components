import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

export default FriendList;
