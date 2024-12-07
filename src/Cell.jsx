import React from 'react'

function Cell({ cell, onClick, onContextMenu }) {
    const content = cell.isRevealed
        ? (cell.isMine ? '💣' : cell.adjacentMines || '')
        : (cell.isFlagged ? '🚩' : '')
    const classes = [
        'cell',
        cell.isRevealed ? 'revealed' : '',
        cell.isMine ? 'mine' : 'mine-' + cell.adjacentMines,
    ]
    return (
        <div className={classes.join(' ')} onClick={onClick} onContextMenu={onContextMenu}><span>{content}</span></div>
    )
}

export default Cell
