import { useEffect, useState } from "react";
import "./App.css";
import { MyCelda } from "./components/MyCelda";
import { MyHeader } from "./components/MyHeader";
let cont = 0;

function App() {
  const pantallaX = window.screen.width;
  const pantallaY = window.screen.height;

  let mallaX = (pantallaX / 32) | 0;
  let mallaY = (pantallaY / 32) | 0;

  const [malla, setMalla] = useState(
    Array(mallaY)
      .fill(null)
      .map(() => Array(mallaX).fill(null))
  );

  const [headerState, setHeaderState] = useState(true);

  useEffect(() => {
    malla.forEach((row, i) => {
      row.forEach((col, j) => {
        malla[i][j] = Math.round(Math.random());
      });
    });
    setMalla([...malla]);
  }, []);
  // console.log(malla);

  const Reiniciar = () => {
    // console.log(mallaX, mallaY);
    malla.forEach((row, i) => {
      row.forEach((col, j) => {
        malla[i][j] = Math.round(Math.random());
      });
    });
    setMalla([...malla]);
    // console.log(malla);
  };

  const Comenzar = () => {
    console.log(cont);
    // setHeaderState(false);
    // console.log(malla.length);
    // console.log(malla[0].length);
    for (let y = 0; y < malla.length; y++) {
      for (let x = 0; x < malla[y].length; x++) {
        if (malla[y][x] === 1) {
          if (!CeldaViva(y, x)) {
            malla[y][x] = 0;
          }
        } else {
          if (malla[y][x] === 0) {
            if (CeldaMuerta(y, x)) {
              malla[y][x] = 1;
            }
          }
        }
      }
    }

    if (cont < 10) {
      setMalla([...malla]);
      setTimeout(Comenzar, 3000);
      cont++;
    } else {
      if (cont === 10) {
        setHeaderState(false);
        cont = 0;
      }
    }
  };

  const CeldaViva = (x, y) => {
    // alert(`X: ${x}, Y: ${y} mallaPosicion: ${malla[x][y]}`);
    // console.log(`Checando la casilla ${x} ${y} : ${malla[x][y]} `);
    let vivas = 0,
      muertas = 0;

    if (checarAtras(x, y) === true) {
      vivas++;
    } else {
      if (checarAtras(x, y) === false) muertas++;
    }

    if (checarAdelante(x, y) === true) {
      vivas++;
    } else {
      if (checarAdelante(x, y) === false) muertas++;
    }

    if (checarArriba(x, y) === true) {
      vivas++;
    } else {
      if (checarArriba(x, y) === false) muertas++;
    }

    if (checarAbajo(x, y) === true) {
      vivas++;
    } else {
      if (checarAbajo(x, y) === false) muertas++;
    }

    if (checarDiagonal_1(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_1(x, y) === false) muertas++;
    }

    if (checarDiagonal_2(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_2(x, y) === false) muertas++;
    }

    if (checarDiagonal_3(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_3(x, y) === false) muertas++;
    }

    if (checarDiagonal_4(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_4(x, y) === false) muertas++;
    }

    // console.log("Vivas: ", vivas);
    // console.log("Muertas: ", muertas);

    if (vivas === 2 || vivas === 3) {
      return true;
    } else {
      return false;
    }
  };

  const CeldaMuerta = (x, y) => {
    // alert(`X: ${x}, Y: ${y} mallaPosicion: ${malla[x][y]}`);
    // console.log(`Checando la casilla ${x} ${y} : ${malla[x][y]} `);
    let vivas = 0,
      muertas = 0;

    if (checarAtras(x, y) === true) {
      vivas++;
    } else {
      if (checarAtras(x, y) === false) muertas++;
    }

    if (checarAdelante(x, y) === true) {
      vivas++;
    } else {
      if (checarAdelante(x, y) === false) muertas++;
    }

    if (checarArriba(x, y) === true) {
      vivas++;
    } else {
      if (checarArriba(x, y) === false) muertas++;
    }

    if (checarAbajo(x, y) === true) {
      vivas++;
    } else {
      if (checarAbajo(x, y) === false) muertas++;
    }

    if (checarDiagonal_1(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_1(x, y) === false) muertas++;
    }

    if (checarDiagonal_2(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_2(x, y) === false) muertas++;
    }

    if (checarDiagonal_3(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_3(x, y) === false) muertas++;
    }

    if (checarDiagonal_4(x, y) === true) {
      vivas++;
    } else {
      if (checarDiagonal_4(x, y) === false) muertas++;
    }

    // console.log("Vivas: ", vivas);
    // console.log("Muertas: ", muertas);

    if (vivas === 3) {
      return true;
    } else {
      return false;
    }
  };

  const checarDiagonal_1 = (x, y) => {
    if (y !== 0 && x !== 0) {
      if (malla[x - 1][y - 1] === 1) {
        return true;
      } else {
        // if (malla[x][y - 1] === 0)
        return false;
      }
    }
    // return 0;
  };
  const checarDiagonal_2 = (x, y) => {
    if (y <= mallaY && x !== 0) {
      if (malla[x + 1][y - 1] === 1) {
        return true;
      } else {
        // if (malla[x][y + 1] === 0)
        return false;
      }
    }
    // return 0;
  };
  const checarDiagonal_3 = (x, y) => {
    if (x !== 0 && y <= mallaY) {
      if (malla[x - 1][y + 1] === 1) {
        return true;
      } else {
        // if (malla[x][y - 1] === 0)
        return false;
      }
    }
    // return 0;
  };
  const checarDiagonal_4 = (x, y) => {
    if (x <= mallaX && y <= mallaY) {
      if (malla[x + 1][y - 1] === 1) {
        return true;
      } else {
        // if (malla[x][y + 1] === 0)
        return false;
      }
    }
    // return 0;
  };

  const checarArriba = (x, y) => {
    if (y !== 0) {
      if (malla[x][y - 1] === 1) {
        return true;
      } else {
        // if (malla[x][y - 1] === 0)
        return false;
      }
    }
    // return 0;
  };
  const checarAbajo = (x, y) => {
    if (y <= mallaY) {
      if (malla[x][y + 1] === 1) {
        return true;
      } else {
        // if (malla[x][y + 1] === 0)
        return false;
      }
    }
    // return 0;
  };

  const checarAtras = (x, y) => {
    if (x !== 0) {
      if (malla[x - 1][y] === 1) {
        return true;
      } else {
        // if (malla[x - 1][y] === 0)
        return false;
      }
    }
    // return 0;
  };

  const checarAdelante = (x, y) => {
    // console.log(x, y);
    if (x <= mallaX) {
      if (malla[x + 1][y] === 1) {
        return true;
      } else {
        // if (malla[x + 1][y] === 0)
        return false;
      }
    }
    // return 0;
  };

  return (
    <div className="App">
      {headerState ? (
        <MyHeader
          setHeaderState={setHeaderState}
          reiniciar={Reiniciar}
          comenzar={Comenzar}
        />
      ) : (
        <div className="absolute z-50 w-full flex justify-center items-center p-8">
          <p
            onClick={() => setHeaderState(true)}
            className="fixed mt-8 w-14 h-14 bg-black rounded-full flex justify-center items-center shadow-2xl cursor-pointer"
          >
            +
          </p>
        </div>
      )}
      <div className="absolute w-full h-screen flex flex-row flex-wrap p-0 justify-center items-center">
        {malla.map((row, y) =>
          row.map((col, x) => (
            <MyCelda key={`${x}-${y}`} isLive={malla[y][x]} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
