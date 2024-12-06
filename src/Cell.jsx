import React from 'react'

function Cell({ cell, onClick }) {
    const content = cell.isRevealed ? (cell.mineCell ? '💣' : cell.adjacentMines || '') : ''
    const classes = [
        'cell',
        cell.isRevealed ? 'revealed' : '',
        cell.isMine ? 'mine' : '',
    ]
    return (
        <div className={classes.join(' ')} onClick={onClick}><i>{content}</i></div>
    )
}

export default Cell
