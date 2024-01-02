import {
	mysqlTable,
	text,
	int,
	index,
	timestamp
} from 'drizzle-orm/mysql-core';

export const produkty = mysqlTable(
	'produkty',
	{
		id: int('id').primaryKey().autoincrement(),
		nazev: text('nazev').notNull().unique(),
		cena: int('cena').notNull(),
		dostupnost: int('dostupnost').notNull(),
		zaruka: int('zaruka'),
		vyrobce: text('vyrobce'),
		vaha: int('vaha'),
		delkaCepele: int('delkaCepele'),
		delkaCelkova: int('delkaCelkova'),
		material: text('material')
	},
	(table) => ({
		cenaIdx: index('cenaIdx').on(table.cena)
	})
);

export const objednavky = mysqlTable('objednavky', {
	id: int('id').primaryKey().autoincrement(),
	datum: timestamp('datum').defaultNow(),
	produktId: int('produktId')
		.notNull()
		.references(() => produkty.id)
});
