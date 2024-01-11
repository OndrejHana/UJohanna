'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Produkt = {
    id: number;
    nazev: string;
    cena: number;
    dostupnost: number | null;
    zaruka: number | null;
    vyrobce: string | null;
    vaha: number | null;
    popis: string | null;
};

export const columns: ColumnDef<Produkt>[] = [
	{
		accessorKey: 'nazev',
		header: 'název'

	},
	{
		accessorKey: 'cena',
		header: 'cena'
	},
	{
		accessorKey: 'dostupnost',
		header: 'dostupnost'
	},
	{
		accessorKey: 'zaruka',
		header: 'záruka'
	},
	{
		accessorKey: 'vyrobce',
		header: 'výrobce'
	},
	{
		accessorKey: 'vaha',
		header: 'váha'
	}
];
