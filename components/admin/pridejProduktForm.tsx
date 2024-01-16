'use client';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog';
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

export default function PridejProduktForm() {
	const form = useForm<z.infer<typeof produkt>>({
		resolver: zodResolver(produkt),
		defaultValues: {
			nazev: '',
			cena: 0,
			vaha: 0,
			popis: '',
			zaruka: 0,
			vyrobce: '',
			dostupnost: 0
		}
	});

	async function formValidation(formData: z.infer<typeof produkt>) {
		try {
			await pridejProdukt(formData);
		} catch (error) {
			const err = error as string;
			console.log(err);

			form.setError('root', {
				message: err
			});

		}
	}

	return (
		<AlertDialog>
			<Card className="mx-auto my-8 w-full max-w-2xl p-2">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(formValidation)}
						id="pridejProduktForm"
						className="space-y-4 p-2"
					>
						{form.formState.errors.root && <FormMessage>{`${form.formState.errors.root?.message}`}</FormMessage>}
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
						<AlertDialogTrigger asChild>
							<Button>Odeslat</Button>
						</AlertDialogTrigger>
					</form>
				</Form>
			</Card>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Vytvořit nový produkt?</AlertDialogTitle>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Zrušit</AlertDialogCancel>
					<AlertDialogAction asChild>
						<Button type="submit" form="pridejProduktForm">
							Odeslat
						</Button>
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
