import { useState } from 'react';
import { Post } from '../types';
import searchIcon from '../assets/search.svg';
import Card from './Card';
type Props = {
    posts: Post[];
    openSearch: boolean;
    setOpenSearch: (b: boolean) => void;
};

const Search = ({ posts, openSearch, setOpenSearch }: Props): JSX.Element => {
    const [inputValue, setInputValue] = useState('');
    const [shownPosts, setShownPosts] = useState<Post[]>([]);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const currentSearch = event.target.value;
        setInputValue(currentSearch);
        if (currentSearch === '') {
            setShownPosts([]);
            setOpenSearch(false);
        } else {
            const postsToShow = posts.filter((post) =>
                post.heading.toLowerCase().includes(currentSearch)
            );
            setShownPosts(postsToShow);
            setOpenSearch(true);
        }
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <div
            className={`${
                openSearch
                    ? 'absolute top-16 bottom-0 right-0 left-0  backdrop-blur-2xl overflow-auto'
                    : ''
            }`}
        >
            <div
                className={`flex  items-stretch relative shadow shadow-gray-300 rounded-md ${
                    openSearch
                        ? 'top-[50px] left-1/2  transform -translate-x-1/2 w-1/2'
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
                        value={inputValue}
                        onChange={handleInputChange}
                        className={`py-2 px-4 w-full  rounded-r-md focus-visible:outline-none`}
                        type='text'
                        placeholder="I'm looking for..."
                    />
                </form>
            </div>
            {shownPosts.length ? (
                <div className='my-container grid gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-3 relative top-[100px] mx-auto [&>*]:bg-white [&>*]:p-2 [&>*]:shadow  [&>*]:shadow-gray-200'>
                    {shownPosts.map((post) => (
                        <Card
                            key={post.heading}
                            post={post}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};
export default Search;
