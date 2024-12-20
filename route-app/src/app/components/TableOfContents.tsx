import games from '../data/games.json'
import Link from 'next/link';

export default function TableOfContents() {

    return(
        <div className="bg-black text-white">
            <h1 className="text-center text-4xl py-3">Table of Contents</h1>

            <div className="flex flex-col">
                {games.map((route) => (
                    <Link className="pl-3 py-3 text-2xl hover:bg-slate-900" href={`/games/${route.id}/${route.seo_name}`} key={route.id}> {route.name} </Link>
                ))}
            </div>

        </div>
    );
}