import { z } from "zod";

export const produkt = z.object({
	nazev: z.string().min(1).max(255),
	cena: z.number().min(0),
	dostupnost: z.number().min(0),
	zaruka: z.number().min(0),
	vyrobce: z.string().min(1).max(255),
	vaha: z.number().min(0),
	popis: z.string().max(1024),
	naSklade: z.boolean()
});