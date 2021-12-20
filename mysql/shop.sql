create database Shop;
use shop;
 
 CREATE TABLE IF NOT EXISTS `shop`.`employees` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,  
  `last_name` VARCHAR(50) NULL DEFAULT NULL,
  `first_name` VARCHAR(50) NULL DEFAULT NULL,
  `email_address` VARCHAR(50) NULL DEFAULT NULL,  
  PRIMARY KEY (`id`), 
  INDEX `first_name` (`first_name` ASC),
  INDEX `last_name` (`last_name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

insert into employees values(2,'Nguyen','Hiep','Quang Nam'); 

