import routes from '../../data/pages.json'
import Link from 'next/link';

export default function TableOfContents() {

    return(
        <div className="bg-black text-white w-40 rounded-md">
            <h1 className="text-center text-lg">Table of Contents</h1>

            <div className="flex flex-col">
                {routes.map((route) => (
                    <Link href={`/pages/${route.id}`} key={route.id}> {route.routeName} </Link>
                ))}
            </div>

        </div>
    );
}