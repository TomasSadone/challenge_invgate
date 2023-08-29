import { Sections } from '../types';
import Section from './Section';

type Props = {
    data: Sections[];
};
const Content = ({ data }: Props): JSX.Element => {
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

export default Content;
