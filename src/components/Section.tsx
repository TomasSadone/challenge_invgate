import { useCallback, useEffect, useState } from 'react';
import { Post, Sections } from '../types';
import { Card } from './Card';

type Props = {
    section: Sections;
    i: number;
};

export const Section = ({ section, i }: Props) => {
    const [filters, setFilters] = useState<string[]>([]);
    const [shownPosts, setShownPosts] = useState<Post[]>(section.posts);

    const handleFilters = useCallback(() => {
        if (!filters.length) {
            return setShownPosts(section.posts);
        }

        const postsToShow = section.posts.filter((post) =>
            filters.every((filter) =>
                post.tags.some(
                    (tag) => tag.toLowerCase() === filter.toLowerCase()
                )
            )
        );
        setShownPosts(postsToShow);
    }, [filters, section.posts]);

    const handleAddFilter = (filter: string) => {
        console.log('addfilter');
        if (!filters.some((stateFilter) => stateFilter === filter)) {
            console.log('agregando');

            setFilters([...filters, filter]);
        }
    };

    const handleRemoveFilter = (filter: string) =>
        setFilters(filters.filter((f) => f !== filter));

    useEffect(() => {
        handleFilters();
    }, [filters, handleFilters]);

    return (
        <section className={`${i % 2 === 0 ? '' : 'bg-gray-100'} py-16`}>
            <div className='my-container'>
                <h1 className='text-2xl text-gray-900 font-semibold mb-8'>
                    {section.section}
                </h1>
                {filters.map((filter) => (
                    <span
                        key={filter}
                        onClick={() => handleRemoveFilter(filter)}
                    >
                        {filter}
                    </span>
                ))}
                <div
                    className={` gap-8 grid ${
                        i === 0
                            ? ' lg:grid-cols-2 md:grid-cols-3'
                            : ' md:grid-cols-3'
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
