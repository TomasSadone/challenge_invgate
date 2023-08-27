import { Post } from '../types';
import arrowIcon from '../assets/arrow.svg';

type Props = {
    i: number;
    postIndex: number;
    post: Post;
    handleAddFilter: (filter: string) => void;
    arrow: boolean;
};
export const Card = ({ post, i, postIndex, handleAddFilter, arrow }: Props) => {
    //2 diferencias de estilos:
    //tags solo en content
    //flechita como 'ver mas' solo en el grande de la 1er seccion, y en los de 3 col.
    //con el mismo criterio que modifico eso, modificar esto.

    //display none a la flecha si i === 0 && postIndex !== 0
    //y a esas mismas grid 2 col
    //y hacerlas invertida a lo de section, lg: 2 cols, md:1 col, 2 cols
    return (
        <div
            className={`grid gap-4 content-start ${
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
            <div className='grid gap-2'>
                <span className='text-sky-700 font-medium'>{post.author}</span>
                <div className='flex justify-between'>
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
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            onClick={() => handleAddFilter(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
