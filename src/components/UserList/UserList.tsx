import React, { FC } from "react";
import styles from "./UserList.module.scss";

interface UserListProps {
  title: string;
  list: string[];
  primary?: boolean;
}

const UserList: FC<UserListProps> = ({ title, list, primary = true }) => {
  return (
    <div className={styles.UserList} data-aos="fade-up">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container}>
        {list.map((name) => (
          <p
            className={`${styles.nickname} ${!primary ? styles.ordinary : ""}`}
            data-aos="fade-down"
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
