import './App.css';
import Grid from "./Grid";
import {useEffect, useState} from "react";
import { generateMines } from "./GameService.ts";
import GridService from "./GridService.ts";

function App() {
    const [gridWidth, setGridWidth] = useState(8)
    const [gridHeight, setGridHeight] = useState(8)
    const [mineCount, setMineCount] = useState(10)
    const [mines, setMines] = useState(generateMines(gridWidth, gridHeight, mineCount))
    const [gridService, setGridService] = useState(new GridService(gridWidth, gridHeight, mines))
    const [grid, setGrid] = useState(gridService.grid)

    return (
        <main className="App">
            <Grid service={gridService} setGrid={setGrid} />
        </main>
    );
}

export default App;
