import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaDownLong } from 'react-icons/fa6';

const PhotoCard = ({photo}) => {
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photo.imageUrl}
            fill
            alt={photo.title}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw'
            className='object-cover rounded-xl'
            />

            <Chip className='absolute right-2 top-2'size='sm'>{photo.category}</Chip>

            </div>
            <div>
                <h2 className='font-medium'>
                    {photo.title}
                </h2>
            </div>

            <div className='flex gap-6'>
            <div className='flex items-center gap-2'>
                <p><FaHeart/></p>
                <p>{photo.likes}</p>
            </div>

            <Separator orientation='vertical'></Separator>

            <div className='flex items-center gap-2'>
                <p><FaDownLong/></p>
                <p>{photo.downloads}</p>
            </div>
            </div>

            <Link href={`/all-photos/${photo.id}`}>
            <Button variant='outline' className={'w-full'}>View</Button>
            </Link>
        </Card>
    );
};

export default PhotoCard;