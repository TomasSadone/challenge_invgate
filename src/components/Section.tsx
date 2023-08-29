import { useCallback, useEffect, useState } from 'react';
import { Post, Sections } from '../types';
import Card from './Card';
import Tag from './Tag';

type Props = {
    section: Sections;
    i: number;
};

const Section = ({ section, i }: Props): JSX.Element => {
    const [filters, setFilters] = useState<string[]>([]);
    const [shownPosts, setShownPosts] = useState<Post[]>(section.posts);

    const handleFilters = useCallback(() => {
        if (!filters.length) {
            return setShownPosts(section.posts);
        }
        const postsToShow = section.posts.filter((post) =>
            filters.every((filter) => post.tags.includes(filter))
        );
        setShownPosts(postsToShow);
    }, [filters, section.posts]);

    const handleAddFilter = (filter: string) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter]);
        }
    };

    const handleRemoveFilter = (filter: string) =>
        setFilters(filters.filter((f) => f !== filter));

    useEffect(() => {
        handleFilters();
    }, [filters, handleFilters]);

    return (
        <section className={`${i % 2 === 0 ? '' : 'bg-gray-100'} pt-12 pb-16`}>
            <div className='my-container'>
                <div className='mb-6 flex items-center gap-4'>
                    <h1 className='text-2xl text-gray-900 font-semibold '>
                        {section.section}
                    </h1>
                    {filters.length ? (
                        <div className='flex gap-2'>
                            {filters.map((filter) => (
                                <Tag
                                    onClick={handleRemoveFilter}
                                    tag={filter}
                                    key={filter}
                                    filter
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
                <div
                    className={` gap-8 grid ${
                        i === 0
                            ? ' md:grid-cols-2 '
                            : ' lg:grid-cols-3 md:grid-cols-2'
                    }`}
                >
                    {shownPosts.map((post, postIndex) => (
                        <Card
                            arrow={(i === 0 && postIndex === 0) || i !== 0}
                            key={post.heading}
                            i={i}
                            postIndex={postIndex}
                            post={post}
                            handleAddFilter={handleAddFilter}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section;
