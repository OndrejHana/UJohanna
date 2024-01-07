'use server';

import { db } from '@/lib/db';
import { produkty } from '@/lib/schema';
import { produkt } from '@/lib/zodTypes';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function pridejProdukt(formData: z.infer<typeof produkt>) {
	try {
		await db.insert(produkty).values(formData);
	} catch (e) {
		console.error('nepodarilo se napsat do db', e);
	}

	revalidatePath('/spravce');
	redirect('/spravce');
}
