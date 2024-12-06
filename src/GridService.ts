import { Mine } from "./GameService";

interface Cell {
    isMine: boolean,
    isRevealed: boolean,
    isFlagged: boolean,
    adjacentMines: number,
    id: string,
    x: number,
    y: number,
}

class GridService {
    public grid: Cell[][];

    constructor(rows: number, cols: number, mines: Mine[]) {
        this.grid = Array
            .from({ length: rows }, (): any[] => Array(cols).fill(null))
            .map((row: any[], rowIndex: number): Cell[] => {
                return row.map((_: any, colIndex: number): Cell => {
                    const isMine: boolean = mines.some((mine: Mine) => mine.x === rowIndex && mine.y === colIndex)

                    return this.createCell(isMine, rowIndex, colIndex)
                });
            })
        this.grid = this.grid.map((row: Cell[], rowIndex: number): Cell[] => {
            return row.map((cell: Cell, colIndex: number): Cell => {
                if (cell.isMine) {
                    return cell
                }

                const neighbors = this.getNeighbors(rowIndex, colIndex)
                cell.adjacentMines = neighbors.filter((neighbor: Cell): boolean => neighbor.isMine).length

                return cell
            })
        })
    }

    createCell(isMine: boolean, x: number, y: number): Cell {
        return {
            isMine,
            isRevealed: false,
            isFlagged: false,
            id: crypto.randomUUID(),
            adjacentMines: 0,
            x,
            y,
        }
    }

    getCell(x: number, y: number): object | null {
        if (this.isValidPosition(x, y)) {
            return this.grid[x][y];
        }
        return null;
    }

    setCell(cell: Cell): void {
        const { x, y } = cell
        if (this.isValidPosition(x, y)) {
            this.grid[x][y] = cell
        }
    }

    getNeighbors(row: number, col: number): Cell[] {
        const neighbors = [];
        const directions = [
            [-1, 0], // Up
            [1, 0],  // Down
            [0, -1], // Left
            [0, 1],  // Right
            [-1, -1], // Top-left
            [-1, 1],  // Top-right
            [1, -1],  // Bottom-left
            [1, 1]    // Bottom-right
        ]

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;
            if (this.isValidPosition(newRow, newCol)) {
                neighbors.push(this.grid[newRow][newCol]);
            }
        }

        return neighbors;
    }

    isValidPosition(row: number, col: number): boolean {
        return row >= 0 && row < this.grid.length && col >= 0 && col < this.grid[0].length;
    }
}

export default GridService;
