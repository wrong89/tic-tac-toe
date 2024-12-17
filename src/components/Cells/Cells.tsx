import { useEffect, useState } from 'react';
import Cell from '../Cell/Cell';

// interface CellsProps {
//    items:
// }

const Cells = () => {
    const [items, setItems] = useState(Array(9));

    console.log('items before update', items);

    useEffect(() => {
        setItems((prev) => prev.fill('-', 0, prev.length));
        console.log('items after update', items);
    }, [items]);

    return (
        <div>
            <Cell />
        </div>
    );
};

export default Cells;
