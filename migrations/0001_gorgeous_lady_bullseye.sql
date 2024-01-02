ALTER TABLE `produkty` ADD CONSTRAINT `produkty_nazev_unique` UNIQUE(`nazev`);--> statement-breakpoint
ALTER TABLE `produkty` ADD `nazev` text NOT NULL;--> statement-breakpoint
ALTER TABLE `produkty` ADD `cena` int NOT NULL;--> statement-breakpoint
ALTER TABLE `produkty` ADD `dostupnost` int NOT NULL;--> statement-breakpoint
ALTER TABLE `produkty` ADD `zaruka` int;--> statement-breakpoint
ALTER TABLE `produkty` ADD `vyrobce` text;--> statement-breakpoint
ALTER TABLE `produkty` ADD `vaha` int;--> statement-breakpoint
ALTER TABLE `produkty` ADD `delkaCepele` int;--> statement-breakpoint
ALTER TABLE `produkty` ADD `delkaCelkova` int;--> statement-breakpoint
ALTER TABLE `produkty` ADD `material` text;