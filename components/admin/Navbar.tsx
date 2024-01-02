import Link from 'next/link';
import { ThemeToggle } from '../client/ThemeToggle';

export default function Navbar() {
	return (
		<nav className="flex w-full items-center justify-between px-4 py-2">
			<Link href="/" className="font-serif text-xl font-bold uppercase ">
				Správcovský panel
			</Link>
			<div className="flex">
				<ThemeToggle />
			</div>
		</nav>
	);
}
