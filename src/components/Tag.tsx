import { useMemo } from 'react';

type ColorMap = {
    [key: number]: string;
};

type Props = { tag: string; onClick: (tag: string) => void; filter?: boolean };

export const Tag = ({ tag, onClick, filter }: Props) => {
    const colorIndex = useMemo(() => getRandomInt(0, 5), []);

    const colors: ColorMap = {
        0: 'bg-red-50 text-red-600',
        1: 'bg-indigo-50 text-indigo-600',
        2: 'bg-blue-50 text-blue-600',
        3: 'bg-slate-50 text-slate-600',
        4: 'bg-emerald-50 text-emerald-600',
        5: 'bg-pink-50 text-pink-600',
    };
    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
        <span
            className={` ${colors[colorIndex]} font-medium px-2 rounded-full cursor-pointer leading-loose`}
            key={tag}
            onClick={() => onClick(tag)}
        >
            {`${tag} `}
            <span className='text-xl'>{filter ? 'x' : null}</span>
        </span>
    );
};
