CREATE TABLE `objednavky` (
	`id` serial AUTO_INCREMENT NOT NULL,
	CONSTRAINT `objednavky_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `produkty` (
	`id` serial AUTO_INCREMENT NOT NULL,
	CONSTRAINT `produkty_id` PRIMARY KEY(`id`)
);
