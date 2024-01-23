'use client';

import { useForm } from 'react-hook-form';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '../ui/form';
import { z } from 'zod';
import { produkt } from '@/lib/zodTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import Image from 'next/image';
import FileSize from '../FileSize';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '../ui/alert-dialog';

const ALLOWED_IMAGE_TYPES = [
	'image/png',
	'image/jpeg',
	'image/jpg',
	'image/webp'
];

export default function PridejProduktForm() {
	const form = useForm<z.infer<typeof produkt>>({
		mode: 'onSubmit',
		resolver: zodResolver(produkt),
		defaultValues: {
			nazev: '',
			cena: 0,
			dostupnost: 0,
			zaruka: 0,
			vyrobce: '',
			vaha: 0,
			popis: ''
		}
	});

	function formAction(formData: z.infer<typeof produkt>) {
		console.log('formAction');
		console.log(formData);
	}

	const fileList = form.watch('obrazky');

	return (
		<AlertDialog>
			<Card className="w-full max-w-3xl p-2">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(formAction)}
						className="space-y-4"
						id="pridejProduktForm"
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
							render={() => (
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
							render={() => (
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
							render={() => (
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
							render={() => (
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
						<div>
							<FormField
								control={form.control}
								name="obrazky"
								render={({ field: { onChange }, ...field }) => {
									return (
										<FormItem>
											<FormLabel>Obrázky</FormLabel>
											<FormControl>
												<Input
													type="file"
													accept={ALLOWED_IMAGE_TYPES.join(',')}
													multiple
													{...form.register('obrazky', {
														value: form.getValues('obrazky')
													})}
													onChange={(e) => {
														onChange(e.target.files!);
													}}
												/>
											</FormControl>
											<FormDescription></FormDescription>
											<FormMessage />
										</FormItem>
									);
								}}
							/>
							{!!fileList && (
								<div className="flex flex-col gap-1">
									{[...fileList].map((image) => (
										<Card className="flex gap-1 p-1" key={image.name}>
											<Image
												className="h-16 w-16 rounded bg-stone-200 object-contain dark:bg-stone-900"
												width={64}
												height={64}
												src={URL.createObjectURL(image)}
												alt={image.name}
											/>
											<div className="grow">
												<p>{image.name}</p>
												<FileSize size={image.size} />
											</div>
											<div className="flex items-center justify-center">
												<div
													className="flex cursor-pointer items-center justify-center rounded p-2 hover:bg-red-300 dark:hover:bg-red-700"
													onClick={() => {
														const newImages = new DataTransfer();

														for (const file of fileList) {
															if (file.name !== image.name) {
																newImages.items.add(file);
															}
														}

														form.setValue('obrazky', newImages.files);
													}}
												>
													<X className="h-4 w-4" />
												</div>
											</div>
										</Card>
									))}
								</div>
							)}
						</div>

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
