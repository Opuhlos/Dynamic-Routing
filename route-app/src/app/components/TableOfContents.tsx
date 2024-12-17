import games from '../data/games.json'
import Link from 'next/link';

export default function TableOfContents() {

    return(
        <div className="bg-black text-white w-40 rounded-md">
            <h1 className="text-center text-lg">Table of Contents</h1>

            <div className="flex flex-col">
                {games.map((route) => (
                    <Link href={`/games/${route.id}/${route.seo_name}`} key={route.id}> {route.name} </Link>
                ))}
            </div>

        </div>
    );
}