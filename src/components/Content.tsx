import { Sections } from '../types';
import { Section } from './Section';

type Props = {
    data: Sections[];
};
export const Content = ({ data }: Props) => {
    return (
        <main className=''>
            {data.map((section, i) => (
                <Section
                    key={section.section}
                    section={section}
                    i={i}
                />
            ))}
        </main>
    );
};
