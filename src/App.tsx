import { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Sections } from './types';
import { Content } from './components/Content';

function App() {
    const [data, setData] = useState<Sections[]>([]);
    const fetchData = async () => {
        const response = await fetch('data.json');
        const data = await response.json();
        setData(data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='relative min-h-screen bg-white text-gray-500'>
            <Navbar />
            <Hero data={data} />
            <Content data={data} />
        </div>
    );
}

export default App;
