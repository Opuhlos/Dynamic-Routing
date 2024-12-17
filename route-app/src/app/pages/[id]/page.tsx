"use client";

import data from '../../../data/pages.json'
import { use } from 'react';



export default function Page({params}: { params: Promise<{ id: string }>}) {
    const { id }  = use(params);
    const pageData = data.find((entry) => entry.id == id)

    return(
        <div> {pageData.content} </div>
    );
}