import Navbar from '@/components/client/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<div>{children}</div>
		</>
	);
}
