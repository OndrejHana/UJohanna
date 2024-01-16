'use server';

import { db } from '@/lib/db';
import { produkty } from '@/lib/schema';
import { produkt } from '@/lib/zodTypes';
import { DatabaseError } from '@planetscale/database';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export async function pridejProdukt(formData: z.infer<typeof produkt>) {
	let res = false;
	try {
		await db.insert(produkty).values(formData);
		res = true;
	} catch (e) {
		console.error(e);
		const err = e as DatabaseError;
		if (err.message.includes('Duplicate entry')) {
			throw new Error('Produkt s tímto názvem již existuje');
		}
	}

	// stupid hack to go around nextjs (cant put revalidatePath in try catch)
	if (res) {
		revalidatePath('/spravce/produkty');
		redirect('/spravce/produkty');
	}
}
