CREATE TABLE `comments` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`comment` varchar(2000) NOT NULL,
	`posting_id` INT NOT NULL,
	`user_id` INT NOT NULL
)

