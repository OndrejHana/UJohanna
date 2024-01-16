import Navbar from '@/components/admin/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex overflow-hidden h-screen w-screen">
			<Navbar />
			<div className="h-full grow bg-stone-100 dark:bg-stone-900">{children}</div>
		</div>
	);
}
