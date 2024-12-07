import './App.css';
import Grid from "./Grid";
import {useEffect, useState} from "react";
import { generateMines } from "./GameService.ts";
import GridService from "./GridService.ts";

function App() {
    const [running, setRunning] = useState(false)
    const [gridWidth, setGridWidth] = useState(8)
    const [gridHeight, setGridHeight] = useState(8)
    const [mineCount, setMineCount] = useState(10)
    const [mines, setMines] = useState(generateMines(gridWidth, gridHeight, mineCount))
    const [gridService, setGridService] = useState(new GridService(gridWidth, gridHeight, mines))
    const [grid, setGrid] = useState(gridService.grid)

    return (
        <main className="App">
            {running
                ? <Grid service={gridService} setGrid={setGrid} />
                : (
                    <div>
                        <label>
                            Width:
                            <input type="number" value={gridWidth} onChange={e => setGridWidth(e.target.value)} />
                        </label>
                        <label>
                            Height:
                            <input type="number" value={gridHeight} onChange={e => setGridHeight(e.target.value)} />
                        </label>
                        <label>
                            Mines:
                            <input type="number" value={mineCount} onChange={e => setMineCount(e.target.value)} />
                        </label>
                        <button onClick={() => {
                            setMines(generateMines(gridWidth, gridHeight, mineCount))
                            setGridService(new GridService(gridWidth, gridHeight, mines))
                            setGrid(gridService.grid)
                            setRunning(true)
                        }}>Start</button>
                    </div>
                )


            }
        </main>
    );
}

export default App;
