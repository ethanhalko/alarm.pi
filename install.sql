DROP TABLE IF EXISTS alarms 
CREATE TABLE alarms
(
	`id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`time` TIME NOT NULL,
	`music` VARCHAR(50) NOT NULL,
	`rise` BOOLEAN DEFAULT 0,

);