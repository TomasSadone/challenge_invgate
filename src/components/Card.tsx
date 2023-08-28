import { Post } from '../types';
import arrowIcon from '../assets/arrow.svg';
import { Tag } from './Tag';

type Props = {
    i?: number;
    postIndex?: number;
    post: Post;
    handleAddFilter?: (filter: string) => void;
    arrow?: boolean;
};

export const Card = ({ post, i, postIndex, handleAddFilter, arrow }: Props) => {
    return (
        <div
            className={`grid gap-4 content-start  rounded-xl ${
                i === 0 && postIndex === 0 ? 'row-span-2' : ''
            } ${
                i === 0 && postIndex !== 0
                    ? 'grid-cols-2 md:grid-cols-1 lg:grid-cols-2 '
                    : ''
            }`}
        >
            <img
                className='rounded-xl self-stretch object-cover '
                src={post.image}
                alt='decorative'
            />
            <div className='grid gap-2 '>
                <span className='text-sky-700 font-medium'>{post.author}</span>
                <div className='flex justify-between cursor-pointer'>
                    <h2 className='text-2xl font-medium text-gray-900'>
                        {post.heading}
                    </h2>
                    {arrow ? (
                        <img
                            src={arrowIcon}
                            alt=''
                        />
                    ) : null}
                </div>
                <p>{post.excerpt}</p>
                <div className='flex gap-2'>
                    {handleAddFilter &&
                        post.tags.map((tag) => (
                            <Tag
                                onClick={
                                    handleAddFilter &&
                                    (() => handleAddFilter(tag))
                                }
                                tag={tag}
                                key={tag}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
