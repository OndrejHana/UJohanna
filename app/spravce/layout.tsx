import Navbar from '@/components/admin/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex h-screen w-full">
			<div>
				<Navbar />
			</div>
			<div className="grow bg-stone-100 p-2 dark:bg-stone-900">{children}</div>
		</div>
	);
}
