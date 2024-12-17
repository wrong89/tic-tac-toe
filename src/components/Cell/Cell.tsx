import { ICell } from '@/types/types';
import React, { FC } from 'react';
import cls from './Cell.module.css';

const Cell: FC<ICell> = ({ text }) => {
    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('Click', event.target);
    };

    return (
        <div className={cls.cell} onClick={clickHandler}>
            {text}
        </div>
    );
};

export default Cell;
