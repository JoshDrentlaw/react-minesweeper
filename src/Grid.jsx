import React from 'react'
import './Grid.css'
import Cell from "./Cell"

const Grid = ({ service, setGrid }) => {
    return (
        <section id="grid-container">
            <div id="grid">
                {service.grid.map((row, i) => {
                    return row.map((cell, j) => {
                        return (
                            <Cell
                                key={cell.id}
                                cell={cell}
                                onClick={() => handleClick(cell, service, setGrid)}
                                onContextMenu={(e) => handleRightClick(e, cell, service, setGrid)}
                            />
                        )
                    })
                })}
            </div>
        </section>
    );
};

function handleClick(cell, service, setGrid)
{
    if (!cell.isRevealed) {
        if (cell.isMine) {
            service.revealAllCells()
        } else {
            service.revealCell(cell)
        }
        setGrid(service.grid.map(row => [...row]))
    }
}

function handleRightClick(e, cell, service, setGrid)
{
    e.preventDefault()
    if (!cell.isRevealed) {
        service.toggleFlag(cell)
        setGrid(service.grid.map(row => [...row]))
    }
}

export default Grid;
