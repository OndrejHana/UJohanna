import { DataTable } from "@/components/admin/produkty/DataTable";
import { columns } from "@/components/admin/produkty/columns";
import { Card } from "@/components/ui/card";
import { db } from "@/lib/db";

export default async function Page() {

	const produkty = await db.query.produkty.findMany();

	return (
		<div className="flex h-full flex-col">
			<h1 className="w-full border-b border-b-stone-300 py-2 text-center text-2xl font-bold dark:border-b-stone-700">
				Produkty
			</h1>
			<Card className="p-2 m-2" >
			<DataTable columns={columns} data={produkty} />
			</Card>
		</div>
	);
}
