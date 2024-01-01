import { ThemeToggle } from './client/ThemeToggle';
import { Button } from './ui/button';
import { ShoppingBasket } from 'lucide-react';

export default function Navbar() {
	return (
		<nav className="flex items-center justify-between px-4 py-2">
			<a href="/" className="font-serif text-xl font-bold uppercase ">
				U Johanna
			</a>
			<div className="flex"></div>
			<div className='flex gap-2'>
				<ThemeToggle />
				<Button className="flex items-center gap-1">
					Košík <ShoppingBasket className="h-4 w-4" />
				</Button>
			</div>
		</nav>
	);
}
