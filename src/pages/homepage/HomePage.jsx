import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={style.infoWrapper}>
        <h1 className={style.pageTitle}>🌍 Welcome to Countries Explorer!</h1>
        <p>
          Discover detailed information about countries around the world in just
          a few clicks! ✨ Explore countries by region, population, languages,
          and more. 🗺️ Click on any country to view detailed data about its
          capital, population, languages, and flag. Start exploring now from the
          Countries page!
        </p>
      </div>

      <img
        className={style.pageImage}
        src="https://c02.purpledshub.com/uploads/sites/41/2023/11/countries-in-the-world.jpg?w=1200"
        alt=""
      />
    </>
  );
};

export default HomePage;
