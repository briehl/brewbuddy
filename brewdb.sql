USE beer;

-- Recipe Table

CREATE TABLE IF NOT EXISTS Recipe (
	recipeId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	creator VARCHAR(255) NOT NULL,
	style INT DEFAULT 0 NOT NULL,
	createDate DATETIME NOT NULL,
	ibu INT DEFAULT 0 NOT NULL,
	color INT DEFAULT 0 NOT NULL,
	abv FLOAT DEFAULT 0 NOT NULL,
	notes TEXT DEFAULT ''
);

-- Style Table

CREATE TABLE IF NOT EXISTS Style (
	styleId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	notes TEXT DEFAULT ''
);

-- Recipe Step
-- steps link to  0 or more ingredients.

CREATE TABLE IF NOT EXISTS RecipeSteps (
	recipeStepId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	recipeId INT NOT NULL,
	step VARCHAR(255) DEFAULT '' NOT NULL,
	stepOrder INT DEFAULT 0 NOT NULL,
	notes TEXT DEFAULT ''
);

-- Recipe Ingredients Table

CREATE TABLE IF NOT EXISTS RecipeIngredients (
	recipeIngredientId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	recipeStepId INT NOT NULL,
	ingredientId INT NOT NULL,
	quantity FLOAT DEFAULT 0,
	timeLength FLOAT DEFAULT 0 NOT NULL,
	type enum('fermentable', 'adjunct', 'yeast', 'hop')
);

-- Fermentables table

CREATE TABLE IF NOT EXISTS Fermentable (
	fermentableId INT NOT NULL auto_increment,
	name VARCHAR(255) NOT NULL,
	color FLOAT DEFAULT 0,
	unit enum('g', 'lb', 'oz', 'mg', 'kg'),
	type VARCHAR(255) NOT NULL,
	PRIMARY KEY(fermentableId)
);

-- Hops table

CREATE TABLE IF NOT EXISTS Hop (
	hopId INT NOT NULL auto_increment,
	name VARCHAR(255) NOT NULL,
	alphaMin FLOAT DEFAULT 0,
	alphaMax FLOAT DEFAULT 0,
	betaMin FLOAT DEFAULT 0,
	betaMax FLOAT DEFAULT 0,
	notes TEXT DEFAULT '',
	PRIMARY KEY(hopId)
);

-- Adjuncts table

CREATE TABLE IF NOT EXISTS Adjunct (
	adjunctId INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	unit enum('g', 'lb', 'oz', 'mg', 'kg'),
	PRIMARY KEY(adjunctId)
);

-- Yeast table

CREATE TABLE IF NOT EXISTS Yeast (
	yeastId INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	company VARCHAR(255),
	companyId VARCHAR(255),
	flocculation enum('low', 'medium', 'high') DEFAULT 'medium' NOT NULL,
	attenuationLow FLOAT DEFAULT 0,
	attenuationHigh FLOAT DEFAULT 0,
	fermTempLow FLOAT DEFAULT 0,
	fermTempHigh FLOAT DEFAULT 0,
	notes TEXT DEFAULT '',
	PRIMARY KEY(yeastId)
);

-- User table

CREATE TABLE IF NOT EXISTS User (
	userId INT NOT NULL AUTO_INCREMENT,
	userName VARCHAR(255) NOT NULL,
	firstName VARCHAR(255) DEFAULT '',
	lastName VARCHAR(255) DEFAULT '',
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL,
	PRIMARY KEY(userId),
	UNIQUE(userId,email),
	UNIQUE(userName)
);