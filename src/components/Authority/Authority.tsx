import React, { FC } from "react";
import styles from "./Authority.module.scss";
import StaffItem from "../StaffItem/StaffItem";
import List from "../List/List";
import staffList, { IStaff } from "../../data/authority";

const Authority: FC = () => {
  return (
    <div className={styles.Authority} data-aos="fade-right">
      <h2 className={styles.title}>Authority</h2>
      <div className={styles.container}>
        <List
          items={staffList}
          renderItem={(member: IStaff) => (
            <StaffItem
              name={member.name}
              image={member.image}
              rating={member.rating}
              role={member.role}
              key={member.name}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Authority;
