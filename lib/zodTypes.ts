import { z } from 'zod';

export const produkt = z.object({
	nazev: z
		.string({
			invalid_type_error: 'Název musí být text',
			required_error: 'Název je povinný'
		})
		.min(1, 'Název musí mít alespoň 1 znak')
		.max(255, 'Název může mít maximálně 255 znaků'),
	cena: z
		.number({
			invalid_type_error: 'Cena musí být číslo',
			required_error: 'Cena je povinná'
		})
		.min(0, 'Cena nemůže být záporná'),
	dostupnost: z
		.number({
			invalid_type_error: 'Dostupnost musí být číslo',
			required_error: 'Dostupnost je povinná'
		})
		.min(0, 'Dostupnost nemůže být záporná'),
	zaruka: z
		.number({
			invalid_type_error: 'Záruka musí být číslo',
			required_error: 'Záruka je povinná'
		})
		.min(0, 'Záruka nemůže být záporná'),
	vyrobce: z
		.string({
			invalid_type_error: 'Výrobce musí být text',
			required_error: 'Výrobce je povinný'
		})
		.min(1, 'Výrobce musí mít alespoň 1 znak')
		.max(255, 'Výrobce může mít maximálně 255 znaků'),
	vaha: z
		.number({
			invalid_type_error: 'Váha musí být číslo',
			required_error: 'Váha je povinná'
		})
		.min(0, 'Váha nemůže být záporná'),
	popis: z
		.string({
			invalid_type_error: 'Popis musí být text',
			required_error: 'Popis je povinný'
		})
		.max(1024, 'Popis může mít maximálně 1024 znaků'),
	obrazky: z
		.custom<FileList>(value => value instanceof FileList, "Required")
		.refine(value => value.length < 5, "Maximálně 4 obrázky")
});
