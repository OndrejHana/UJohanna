ALTER TABLE `objednavky` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `produkty` MODIFY COLUMN `id` int AUTO_INCREMENT NOT NULL;--> statement-breakpoint
ALTER TABLE `objednavky` ADD `datum` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `objednavky` ADD `produktId` int NOT NULL;--> statement-breakpoint
CREATE INDEX `cenaIdx` ON `produkty` (`cena`);--> statement-breakpoint
ALTER TABLE `objednavky` ADD CONSTRAINT `objednavky_produktId_produkty_id_fk` FOREIGN KEY (`produktId`) REFERENCES `produkty`(`id`) ON DELETE no action ON UPDATE no action;