import React, { FC } from "react";
import "./App.css";
import Aos from "aos";
import Header from "../Header/Header";
import Main from "../Main/Main";
import headerLinks from "../../data/links";
import Footer from "../Footer/Footer";

import "aos/dist/aos.css";

const App: FC = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header list={headerLinks} />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
