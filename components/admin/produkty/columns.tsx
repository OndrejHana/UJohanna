'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

export type Produkt = {
	id: number;
	nazev: string;
	cena: number;
	dostupnost: number | null;
	zaruka: number | null;
	vyrobce: string | null;
	vaha: number | null;
	popis: string | null;
	naSklade: boolean;
};

export const columns: ColumnDef<Produkt>[] = [
	{
		accessorKey: 'nazev',
		header: ({ column }) => {
			return (
				<Button
					variant={column.getIsSorted() === false ? 'ghost' : 'outline'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<p
						className={
							column.getIsSorted() === false
								? ''
								: 'font-medium text-black dark:text-white'
						}
					>
						Název
					</p>
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'cena',
		header: ({ column }) => {
			return (
				<Button
					variant={column.getIsSorted() === false ? 'ghost' : 'outline'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<p
						className={
							column.getIsSorted() === false
								? ''
								: 'font-medium text-black dark:text-white'
						}
					>
						Cena
					</p>
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue('cena'));
			const formatted = new Intl.NumberFormat('cs-CZ', {
				style: 'currency',
				currency: 'CZK'
			}).format(amount);

			return <div>{formatted}</div>;
		}
	},
	{
		accessorKey: 'dostupnost',
		header: ({ column }) => {
			return (
				<Button
					variant={column.getIsSorted() === false ? 'ghost' : 'outline'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<p
						className={
							column.getIsSorted() === false
								? ''
								: 'font-medium text-black dark:text-white'
						}
					>
						Dostupnost
					</p>
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const dostupnost = parseFloat(row.getValue('dostupnost'));
			return <div>{dostupnost}</div>;
		}
	},
	{
		accessorKey: 'zaruka',
		header: ({ column }) => {
			return (
				<Button
					variant={column.getIsSorted() === false ? 'ghost' : 'outline'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<p
						className={
							column.getIsSorted() === false
								? ''
								: 'font-medium text-black dark:text-white'
						}
					>
						Záruka
					</p>
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'vyrobce',
		header: ({ column }) => {
			return (
				<Button
					variant={column.getIsSorted() === false ? 'ghost' : 'outline'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<p
						className={
							column.getIsSorted() === false
								? ''
								: 'font-medium text-black dark:text-white'
						}
					>
						Výrobce
					</p>
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
	{
		accessorKey: 'vaha',
		header: ({ column }) => {
			return (
				<Button
					variant={column.getIsSorted() === false ? 'ghost' : 'outline'}
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					<p
						className={
							column.getIsSorted() === false
								? ''
								: 'font-medium text-black dark:text-white'
						}
					>
						Váha
					</p>
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		}
	},
];
