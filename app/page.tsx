import Image from 'next/image';
import uvodniFotka from '@/public/uvodniFotka.jpg';

export default function Home() {
	return (
		<main className="flex flex-col">
			<div className="relative max-h-screen overflow-hidden">
				<div className="absolute z-10 flex h-full w-full items-center justify-center">
					<div className="flex w-full flex-col items-center justify-center gap-4 p-12 backdrop-blur-sm shadow-2xl">
						<h1 className="font-serif text-8xl font-bold text-white tracking-wide">
							U Johanna
						</h1>
						<button className="rounded-lg bg-white px-8 py-4 text-lg  font-bold text-black shadow-md transition duration-300 ease-out hover:bg-orange-400 hover:shadow-lg">
							Procházet zboží
						</button>
					</div>
				</div>
				<Image
					src={uvodniFotka}
					alt="U Johanna"
					className="object-cover"
				/>
			</div>
		</main>
	);
}

