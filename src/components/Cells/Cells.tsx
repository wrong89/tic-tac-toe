import { ICell } from '@/types/types';
import { FC } from 'react';
import Cell from '../Cell/Cell';
import cls from './Cells.module.css';

interface CellsProps {
    items: ICell[][];
}

const Cells: FC<CellsProps> = ({ items: rows }) => {
    return (
        <div className={cls.cells}>
            {rows.map((cols, index) => (
                <div className={cls.column} key={index}>
                    {cols.map((item, index) => (
                        <Cell key={index} {...item} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Cells;
