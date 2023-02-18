import styles from "./style";
import { useState } from "react";
import { Navbar, Hero, Stats, Footer, Business, Contact } from "./components";

const App = () => {
  const [loading, SetLoading] = useState(true);

  return (
    <div className="bg-primary w-full overflow-hidden">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className={`${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      )}

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero loading={loading} onLoadChange={SetLoading} />
        </div>
      </div>
      {!loading ? (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Contact />
            <Footer />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
