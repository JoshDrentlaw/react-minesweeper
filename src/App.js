import './App.css';
import Grid from "./Grid";
import {useState} from "react";
import { generateMines } from "./GameService.ts";
import GridService from "./GridService.ts";

function App() {
    const [gridWidth, setGridWidth] = useState(8)
    const [gridHeight, setGridHeight] = useState(8)
    const [mineCount, setMineCount] = useState(10)
    const [mines, setMines] = useState(generateMines(gridWidth, gridHeight, mineCount))

    return (
        <main className="App">
            <Grid service={new GridService(gridWidth, gridHeight, mines)} />
        </main>
    );
}

export default App;
