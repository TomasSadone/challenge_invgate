import { useState } from 'react';
import { Post, Sections } from '../types';
import searchIcon from '../assets/search.svg';
type Props = {
    data: Sections[];
};

export const Search = ({ data }: Props) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const posts = data.map((section) => section.posts).flat();
    const [shownPosts, setShownPosts] = useState<Post[]>([]);
    console.log(shownPosts);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = event.target.value;
        setInputValue(currentSearch);
        if (currentSearch === '') {
            setShownPosts([]);
            setOpen(false);
        } else {
            const postsToShow = posts.filter((post) =>
                post.heading.toLowerCase().includes(currentSearch)
            );
            setShownPosts(postsToShow);
            setOpen(true);
        }
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <div
            className={`${
                open
                    ? 'absolute top-16 bottom-0 right-0 left-0  backdrop-blur-2xl '
                    : ''
            }`}
        >
            <div
                className={`flex  items-stretch relative shadow shadow-gray-300 rounded-md ${
                    open
                        ? 'top-[150px] left-1/2  transform -translate-x-1/2 w-1/2'
                        : ''
                }`}
            >
                <div className='h-10 w-14 rounded-l-md  bg-sky-500 grid place-content-center'>
                    <img
                        className=' '
                        src={searchIcon}
                        alt=''
                    />
                </div>
                <form
                    action=''
                    onSubmit={handleSubmit}
                    className={`w-full  text-black`}
                >
                    <input
                        // sky-500 el bg de la lupa
                        value={inputValue}
                        onChange={handleInputChange}
                        className={`py-2 px-4 w-full  rounded-r-md`}
                        type='text'
                        placeholder="I'm looking for..."
                    />
                </form>
            </div>
        </div>
    );
};
