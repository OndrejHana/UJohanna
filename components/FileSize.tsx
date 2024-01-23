export default function FileSize({ size }: { size: number}) {
	return (
		<span className="text-sm text-stone-500 dark:text-stone-400">
			{size > 1000000
				? `${(size / 1000000).toFixed(2)} MB`
				: `${(size / 1000).toFixed(2)} KB`}
		</span>
	);
}

