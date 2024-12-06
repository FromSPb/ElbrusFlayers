import styles from "./StartPage.module.css";

function StartPage(props) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>Добро пожалловать в Урюпинск!</div>
        <div>
          <div className="zoo">
            <img
              src="https://ic.pics.livejournal.com/moscow_i_ya/59917972/2847650/2847650_600.jpg"
              alt="urupa"
              className={styles.img}
            />
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div>
          <span className="zoo">
            <img
              src="https://www.klgd.ru/upload/iblock/26d/26dfc527e5b6ea394053400dca183deb.JPG"
              alt="tiger"
              className={styles.img}
            />
          </span>
        </div>
        <div>Мы рады видеть вас в нашем зоопарке</div>
      </div>
    </div>
  );
}

export default StartPage;
