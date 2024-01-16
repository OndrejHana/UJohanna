import PridejProduktForm from "@/components/admin/pridejProduktForm";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
	return (
		<div className="flex h-full flex-col">
			<h1 className="w-full border-b border-b-stone-300 py-2 text-center text-2xl font-bold dark:border-b-stone-700">
				Produkty
			</h1>
			<ScrollArea className="w-full">
				<PridejProduktForm />
			</ScrollArea>
		</div>
	);
}
