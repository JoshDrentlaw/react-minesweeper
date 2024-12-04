import React from 'react'
import './Grid.css'
import Cell from "./Cell"

const Grid = ({ service }) => {
    return (
        <section id="grid-container">
            <div id="grid">
                {service.grid.map((row, i) => {
                    return row.map((cell, j) => {
                        return (
                            <Cell key={cell.id} cell={cell} onClick={() => handleClick(service, cell)} />
                        )
                    })
                })}
            </div>
        </section>
    );
};

function handleClick(service, cell)
{
    console.log(service, cell)
    cell.isRevealed = true
}

export default Grid;
