import { DataTable } from '@/components/admin/produkty/DataTable';
import { columns } from '@/components/admin/produkty/columns';
import { db } from '@/lib/db';

export default async function Page() {
	const produkty = await db.query.produkty.findMany();

	return (
		<div className="h-full w-full ">
			<DataTable columns={columns} data={produkty} />
		</div>
	);
}
