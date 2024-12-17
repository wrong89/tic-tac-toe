import { ICell } from '@/types/types';
import { useState } from 'react';
import Cells from '../Cells/Cells';

const Board = () => {
    // const [items, setItems] = useState<[][ICell]>([[{ text: false }], [], []]);
    const [items, setItems] = useState<ICell[][]>([
        [{ text: '-' }, { text: '-' }, { text: '-' }],
        [{ text: '-' }, { text: '-' }, { text: '-' }],
        [{ text: '-' }, { text: '-' }, { text: '-' }],
    ]);

    return (
        <div>
            <h1>Hello board</h1>
            {/* <Cell /> */}
            <Cells items={items} />
        </div>
    );
};

export default Board;
