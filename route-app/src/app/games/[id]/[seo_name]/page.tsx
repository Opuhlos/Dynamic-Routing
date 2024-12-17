"use client";

import data from '../../../data/games.json'
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
        <div> {pageData?.name} </div>
    );
}