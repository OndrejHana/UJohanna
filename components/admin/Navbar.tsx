import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';

export default function Navbar() {
	return (
		<nav className="flex h-full w-64 flex-col items-center border-r border-r-stone-300 dark:border-r-stone-700">
			<Link
				href="/spravce"
				className="w-full border-b border-stone-300 p-2 text-center dark:border-stone-700"
			>
				<h1 className="text-2xl font-bold">Správce</h1>
			</Link>
			<div className="flex h-full w-full flex-col justify-between">
				<ScrollArea className="flex-grow">
					<Button asChild variant="ghost">
						<Link
							href="/spravce/produkty"
							className='w-full rounded-none'
						>
							Produkty
						</Link>
					</Button>
				</ScrollArea>
				<div className="flex w-full justify-between p-2">
					<ThemeToggle />
					<div className="flex items-center gap-2">
						<UserButton afterSignOutUrl="/" />
						<Button asChild>
							<SignOutButton />
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
