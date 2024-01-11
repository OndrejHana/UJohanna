import { db } from "@/lib/db";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function ProductCount() {
	const results = await db.query.produkty.findMany();

	return (
		<Card className="max-w-fit p-2 flex flex-col justify-center">
			<h2 className="border-b border-stone-300 text-center  font-medium dark:border-stone-700">
				Počet produktů
			</h2>
			<p className="py-4 text-center text-2xl font-bold">{results.length}</p>
			<Button asChild>
				<Link href="/spravce/produkty/pridat">Přidat produkt</Link>
			</Button>
		</Card>
	);
}
