import style from './RandomColor.module.css';

function RandomColor() {
  return (
    <div className={style.container}>
      <button className={style.button} type="button">Create HEX Color</button>
      <button className={style.button} type="button">Create RGB Color</button>
      <button className={style.button} type="button">Generate Random Color</button>
      <section>
        <h1></h1>
        <h2></h2>
      </section>
    </div>
  );
}

export default RandomColor;
