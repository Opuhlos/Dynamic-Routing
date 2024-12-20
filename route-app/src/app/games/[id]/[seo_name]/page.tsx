"use client";

import data from '../../../data/games.json'
import Image from 'next/image';
import { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page({params}: { params: Promise<{ id: string, seo_name: string }>}) {
    const router = useRouter();

    // Destructore the ID and SEO name from the params
    const { id, seo_name }  = use(params);

    // Find the corresponding game according to the query ID
    const pageData = data.find((entry) => entry.id == id)

    useEffect(() => {
        // If the ID is valid but the SEO name doesn't match, correct the URL
        if (pageData && pageData.seo_name !== seo_name) {
            router.replace(`/games/${id}/${pageData.seo_name}`)
        }
    }, [id, seo_name, pageData, router]) // This effect is ran whenever one of the dependencies in the array changes

    return(
        <div> 
            <div className="relative w-full h-72">
                <Image src={`${pageData?.image}`} fill={true} objectFit="cover" quality={100} alt="Picture of the game"/>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-70% to-white"></div>
            </div>

            <h1 className="text-center text-6xl">{pageData?.name} </h1>
        </div>
    );
}