import style from './RandomColor.module.css';
import { useState, useEffect } from 'react';

function RandomColor() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    colorType === 'hex' ?
      handleCreateRandomHexColor() :
      handleCreateRandomRgbColor();
  }, [colorType]);

  function generateRandomColor(value: number) {
    return Math.floor(Math.random() * value);
  }

  function handleCreateRandomHexColor() {
    const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomColor(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const red = generateRandomColor(256);
    const green = generateRandomColor(256);
    const blue = generateRandomColor(256);

    setColor(`rgb(${red}, ${green}, ${blue})`);
  }

  return (
    <div className={style.container} style={{backgroundColor: color}}>
      <button className={style.button} type="button"
              onClick={() => setColorType('hex')}
      >Create HEX Color</button>
      <button className={style.button} type="button"
              onClick={() => setColorType('rgb')}
      >Create RGB Color</button>
      <button className={style.button} type="button"
              onClick={colorType === 'hex' ?
                        handleCreateRandomHexColor :
                        handleCreateRandomRgbColor}
      >Generate Random Color</button>
      <section className={style.display}>
        <h1>{colorType === 'hex' ? 'HEX Color' : 'RGB Color'}</h1>
        <h2>{color}</h2>
      </section>
    </div>
  );
}

export default RandomColor;
