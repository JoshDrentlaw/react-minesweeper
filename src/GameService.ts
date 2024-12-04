export interface Mine {
    x: number,
    y: number
}

export function generateMines(gridWidth: number, gridHeight: number, mineCount: number): Mine[] {
    const mines = new Set();
    while (mines.size < mineCount) {
        const x: number = Math.floor(Math.random() * gridWidth) + 1;
        const y: number = Math.floor(Math.random() * gridHeight) + 1;
        mines.add(`${x},${y}`);
    }

    return Array.from(mines).map((mine: string) => {
        const [x, y] = mine.split(',').map(Number);
        return createMine(x, y)
    });
}

function createMine(x: number, y: number): Mine {
    return { x, y };
}
