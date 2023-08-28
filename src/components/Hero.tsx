import heroVideo from '../assets/2_hero.webm';
import { Sections } from '../types';
import { Search } from './Search';

type Props = {
    data: Sections[];
    open: boolean;
    setOpen: (b: boolean) => void;
};

export const Hero = ({ data, open, setOpen }: Props) => {
    return (
        <section className='my-container-lg '>
            <div className=' px-16 py-12   bg-[#E3F2FF] grid md:grid-cols-2 rounded-xl shadow-xl shadow-gray-200'>
                <div className='grid gap-4 content-center justify-items-start   '>
                    <p className='text-sky-600 font-medium'>
                        Articles, videos and more
                    </p>
                    <h1 className='text-start text-4xl lg:text-5xl font-semibold text-sky-900'>
                        Find the most relevant content in the IT world
                    </h1>
                    <Search
                        data={data}
                        open={open}
                        setOpen={setOpen}
                    />
                    <span className='text-gray-500 text-sm'>
                        We care about your data in our{' '}
                        <a
                            className='underline'
                            href='#'
                        >
                            privacy policy
                        </a>
                    </span>
                </div>
                <video
                    //para el esqueleto que cargue un div con una animacion con aspect ratio 16/4
                    className='h-full'
                    autoPlay={true}
                    loop
                    muted
                >
                    <source
                        src={heroVideo}
                        type='video/webm'
                    />
                    Your browser does not support the video tag
                </video>
            </div>
        </section>
    );
};
