import ProductList from '@/components/admin/ProductList';
import { Card } from '@/components/ui/card';

export default async function Page() {
	return (
		<div className="h-full w-full ">
			<ProductList />
		</div>
	);
}
