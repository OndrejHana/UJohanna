import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
	return (
		<nav className="flex h-full w-64 flex-col items-center">
			<Link
				href="/spravce"
				className="w-full border-b border-stone-300 p-2 text-center dark:border-stone-700"
			>
				<h1>Správce</h1>
			</Link>
			<div className='flex'>
				<UserButton afterSignOutUrl="/" />
				<ThemeToggle />
			</div>
		</nav>
	);
}
