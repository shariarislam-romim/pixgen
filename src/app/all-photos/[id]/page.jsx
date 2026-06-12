import { Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaDownLong } from 'react-icons/fa6';

const PhotoDetails = async ({params}) => {
    const {id} = await params;
    // console.log(id)

    const res = await fetch('https://pixgen-liard.vercel.app/data.json')
    const photos = await res.json()

    const photo= photos.find(p => p.id == id)
    console.log(photo)

     return (
        <Card className='border rounded-xl max-w-10vw mx-auto mt-10'>
                    <div className='relative w-full aspect-square '>
                        <Image src={photo.imageUrl}
                    fill
                    alt={photo.title}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw'
                    className='object-cover rounded-xl'
                    />
        
                    <Chip className='absolute right-2 top-2'size='sm'>{photo.category}</Chip>
        
                    </div>
                    <div>
                        <h1 className='font-bold text-2xl'>
                            {photo.title}
                        </h1>
                        <h2>Category : {photo.category}</h2>
                        <h2>Model : {photo.model}</h2>
                        <h2>Prompt{photo.prompt}</h2>
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
        
                </Card>
    );
};

export default PhotoDetails;