'use client';

import { Card } from '@/components/ui/card';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { produkt } from '@/lib/zodTypes';
import { pridejProdukt } from '@/server/pridejProdukt';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function Page() {
	const form = useForm<z.infer<typeof produkt>>({
		resolver: zodResolver(produkt)
	});

	async function formValidation(formData: z.infer<typeof produkt>) {
		console.log(formData);
		try {
			await pridejProdukt(formData);
		} catch (error) {
			console.log(error);
			return;
		}
	}

	return (
		<div className="flex flex-col items-center gap-4 pt-4">
			<h1 className="text-center text-4xl font-bold">Přidat nový produkt</h1>
			<Card className="w-full max-w-2xl p-2">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(formValidation)}
						className="space-y-4 p-2"
					>
						<FormField
							control={form.control}
							name="nazev"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Název produktu</FormLabel>
									<FormControl>
										<Input type="text" placeholder="Kord kytička" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="cena"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Cena</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="100"
											{...form.register('cena', {
												valueAsNumber: true
											})}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="dostupnost"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Dostupnost</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="10"
											{...form.register('dostupnost', {
												valueAsNumber: true
											})}
										/>
									</FormControl>
									<FormDescription>
										Do kolika dnů bude produkt připraven k odeslání
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="zaruka"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Záruka</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="24"
											{...form.register('zaruka', {
												valueAsNumber: true
											})}
										/>
									</FormControl>
									<FormDescription>
										Počet měsíců záruky na produkt, pokud produkt nemá záruku,
										zadejte 0
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="vyrobce"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Výrobce</FormLabel>
									<FormControl>
										<Input type="text" placeholder="Mikov s.r.o." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="vaha"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Váha</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="100"
											{...form.register('vaha', {
												valueAsNumber: true
											})}
										/>
									</FormControl>
									<FormDescription>
										Váha produktu v grammech, pokud nevíte, zadejte 0
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="popis"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Popis</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Popis produktu"
											className="resize-y"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="naSklade"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
									<FormLabel>Je na skladě</FormLabel>
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Odeslat</Button>
					</form>
				</Form>
			</Card>
		</div>
	);
}
