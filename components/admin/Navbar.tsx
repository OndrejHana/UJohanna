import Link from 'next/link';
import { ThemeToggle } from '../ThemeToggle';
import { SignOutButton, UserButton } from '@clerk/nextjs';
import { Button } from '../ui/button';

export default function Navbar() {
	return (
		<nav className="flex h-full w-64 flex-col items-center">
			<Link
				href="/spravce"
				className="w-full border-b border-stone-300 p-2 text-center dark:border-stone-700"
			>
				<h1 className='font-semibold text-xl'>Správce</h1>
			</Link>
			<div className="flex h-full w-full flex-col justify-between">
				<div className="grow"></div>
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
