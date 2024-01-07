import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NewProductButton() {
	return (
		<Button asChild>
			<Link href="/spravce/newProduct">Nový produkt</Link>
		</Button>
	);
}
