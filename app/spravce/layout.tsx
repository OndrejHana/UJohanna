import Navbar from "@/components/admin/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
