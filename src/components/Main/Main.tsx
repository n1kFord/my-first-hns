import React, { FC } from "react";
import styles from "./Main.module.scss";
import Landing from "../Landing/Landing";
import About from "../About/About";
import serverLinks from "../../data/servers";
import adminList from "../../data/admins";
import vipList from "../../data/vips";
import Authority from "../Authority/Authority";
import UserList from "../UserList/UserList";

const Main: FC = () => {
  return (
    <div className={styles.Main}>
      <Landing servers={serverLinks} />
      <About />
      <Authority />
      <UserList title="admins_" list={adminList} />
      <UserList title="vip players_" list={vipList} primary={false} />
    </div>
  );
};

export default Main;
