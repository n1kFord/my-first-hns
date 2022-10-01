import React, { FC } from "react";
import styles from "./Header.module.scss";
import logoPath from "../../images/header-logo.png";
import HeaderItem from "../HeaderItem/HeaderItem";
import List from "../List/List";
import { ILink } from "../../data/links";

interface HeaderProps {
  list: ILink[];
}

const Header: FC<HeaderProps> = ({ list }) => {
  return (
    <header className={styles.Header} data-aos="fade-down">
      <a href="/">
        <img src={logoPath} alt="logo" className={styles.logo} />
      </a>
      <div className={styles.container}>
        <List
          items={list}
          renderItem={(link: ILink) => (
            <HeaderItem
              key={link.name}
              name={link.name}
              path={link.path}
              href={link.href}
            />
          )}
        />
      </div>
    </header>
  );
};

export default Header;
