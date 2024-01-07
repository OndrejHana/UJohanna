import {
	mysqlTable,
	int,
	index,
	timestamp,
	varchar,
	mysqlEnum
} from 'drizzle-orm/mysql-core';

export const produkty = mysqlTable('produkty', {
	id: int('id').primaryKey().autoincrement(),
	nazev: varchar('nazev', { length: 255 }).notNull().unique(),
	cena: int('cena').notNull(),
	dostupnost: int('dostupnost'),
	zaruka: int('zaruka'),
	vyrobce: varchar('vyrobce', { length: 255 }),
	vaha: int('vaha'),
	popis: varchar('popis', { length: 1024 })
});

export const navstevnost = mysqlTable('navstevnost', {
	id: int('id').primaryKey().autoincrement(),
	datum: timestamp('datum').defaultNow(),
	ipAdresa: varchar('ipAdresa', { length: 64 }).notNull()
});

export const objednavky = mysqlTable('objednavky', {
	id: int('id').primaryKey().autoincrement(),
	datum: timestamp('datum').defaultNow(),
	navstevnikId: int('navstevnikId').notNull(),
	produktId: int('produktId').notNull(),
	jmeno: varchar('jmeno', { length: 255 }).notNull(),
	prijmeni: varchar('prijmeni', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	telefon: varchar('telefon', { length: 9 }).notNull(),
	ulice: varchar('ulice', { length: 255 }).notNull(),
	mesto: varchar('mesto', { length: 255 }).notNull(),
	psc: varchar('psc', { length: 5 }).notNull(),
	komentar: varchar('komentar', { length: 1024 }),
	stav: mysqlEnum('stav', [
		'prijata',
		'zpracovana',
		'odeslana',
		'dorucena',
		'zrusena'
	]).notNull()
});
