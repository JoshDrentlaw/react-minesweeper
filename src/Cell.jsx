import React from 'react'

function Cell({ cell, onClick }) {
    const content = cell.isRevealed ? (cell.mineCell ? '💣' : cell.adjacentMines || '') : ''
    return (
        <div className={`cell${cell.isRevealed && cell.isMine ? ' mine' : ''}`} onClick={onClick}><i>{content}</i></div>
    )
}

export default Cell
