import { db } from '@/lib/db';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';

export default async function ProductList() {
	const results = await db.query.produkty.findMany();

	return (
		<Card>
			<h2>Pocet produktu</h2>
			<p>{results.length}</p>
			<Button asChild>
				<Link href="/spravce/produkty/pridat">Přidat produkt</Link>
			</Button>
		</Card>
	);
}
