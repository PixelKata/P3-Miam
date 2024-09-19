-- SQLBook: Code
CREATE TABLE difficulty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO difficulty (name) VALUES ('Facile'), ('Intermédiaire'), ('Difficile');

CREATE TABLE user (
   id INT AUTO_INCREMENT PRIMARY KEY,
   pseudo VARCHAR(50) NOT NULL,
   username VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(255) NOT NULL,
   email VARCHAR(100) NOT NULL UNIQUE,
   role VARCHAR(20) NOT NULL DEFAULT 0,
   civility INT NOT NULL DEFAULT 0 CHECK (civility IN (0, 1, 2)),
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO user (pseudo, username, password, email, role)
VALUES ('GastroGeek', 'Ewan', 'password', 'ewan@outlook.fr', 'admin')
,('Chef_Gourmand', 'Kevin', 'password','kevin@outlook.fr', 'user'),
('PatissierePoetique','Anais', 'password', 'anais@outlook.fr','user');

CREATE TABLE recipe (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    difficulty_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description text NOT NULL,
    cooking_time INT NOT NULL,
    preparation_time INT NOT NULL,
    instruction text NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE,
    FOREIGN KEY (difficulty_id) REFERENCES Difficulty(id)
);

INSERT INTO recipe (user_id, difficulty_id, title, description, cooking_time, preparation_time, instruction) VALUES (2, 3, "Saint-honoré", "Le Saint-Honoré est un dessert classique de la pâtisserie française, composé d'une base de pâte feuilletée, surmontée de choux garnis de crème chiboust et caramélisés, le tout décoré de chantilly", 60, 120, 'lorem'), (3, 1, "Quiche Thon et tomates","Une quiche savoureuse et facile à réaliser, à base de thon et de tomates fraîches, parfaite pour un repas léger ou un pique-nique.", 60, 20, 'lorem'), (2, 2, "Lasagnes bolognaise","Des lasagnes à la bolognaise classiques, avec une sauce riche en viande hachée, sauce tomate et une béchamel crémeuse. Un plat italien incontournable et généreux." , 60, 60, 'lorem'),(2, 1, "Toast foie gras", "Le foie gras est un mets délicat français, préparé à partir du foie d'oie ou de canard engraissé. Il est apprécié pour sa texture fondante et son goût riche et subtil.", 2, 5, 'lorem');


CREATE TABLE ingredient (
  id INT AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(100) NOT NULL UNIQUE
 );

INSERT INTO ingredient (name) VALUES 
('Abricot'),
('Agneau'),
('Ail'),
('Ananas'),
('Artichaut'),
('Asperge'),
('Aubergine'),
('Avocat'),
('Basilic'),
('Banane'),
('Bar'),
('Beurre'),
('Betterave'),
('Betterave chioggia'),
('Bœuf'),
('Burrata'),
('Cabillaud'),
('Camembert'),
('Cannelle'),
('Carotte'),
('Carotte violette'),
('Céleri'),
('Cerise'),
('Chayotte'),
('Chèvre'),
('Chicorée'),
('Chocolat'),
('Chou chinois'),
('Chou de Bruxelles'),
('Chou-fleur'),
('Chou-rave'),
('Chou rouge'),
('Chou vert'),
('Ciboulette'),
('Coco'),
('Comté'),
('Concentré de tomates'),
('Courge butternut'),
('Courge spaghetti'),
('Courgette'),
('Crème fraîche'),
('Cresson'),
('Crosne'),
('Cannelle'),
('Datte'),
('Dorade'),
('Échalote'),
('Endive'),
('Épinard'),
('Farine'),
('Fenouil'),
('Fève'),
('Figue'),
('Fraise'),
('Framboise'),
('Fruit de la passion'),
('Fécule de maïs'),
('Fromage râpé'),
('Gingembre'),
('Gorgonzola'),
('Grenade'),
('Gruyère'),
('Groseille'),
('Haricot vert'),
('Jambon'),
('Kale'),
('Kiwi'),
('Kumquat'),
('Lait'),
('Laitue'),
('Laurier'),
('Lardons'),
('Mangue'),
('Mâche'),
('Mandarine'),
('Miel'),
('Melon'),
('Mirabelle'),
('Mûre'),
('Myrtille'),
('Nectarine'),
('Navet'),
('Noisette'),
('Noix'),
('Orange'),
('Oignon'),
('Papaye'),
('Parmesan'),
('Patate douce'),
('Patisson'),
('Pêche'),
('Peu de pois'),
('Penne'),
('Pomme'),
('Pomme-de-terre'),
('Poire'),
('Poireau'),
('Poivron jaune'),
('Poivron rouge'),
('Poivron vert'),
('Pommes de terre'),
('Poulet'),
('Prune'),
('Quetsche'),
('Radicchio'),
('Radis'),
('Radis noir'),
('Raisin'),
('Raisin sec'),
('Rhubarbe'),
('Ricotta'),
('Roquette'),
('Roquefort'),
('Rutabaga'),
('Salsifis'),
('Salicorne'),
('Saumon'),
('Sardine'),
('Sauce tomate'),
('Scarole'),
('Sel'),
('Sole'),
('Sucre'),
('Sucre glace'),
('Topinambour'),
('Tomate'),
('Tomates cerises'),
('Tomates concassées'),
('Tomates entières au jus'),
('Tomates fraîches'),
('Tomates pelées'),
('Tomates séchées'),
('Purée de tomates'),
('Coulis de tomates'),
('Sauce tomate'),
('Concentré de tomates'),
('Tagliatelle'),
('Turbot'),
('Veau'),
('Vanille'),
('Yuzu'),
('Spaghetti'),
('Lasagnes'),
('Fusilli'),
('Macaroni'),
('Ravioli'),
('Basmati'),
('Jasmin'),
('Riz Arborio'),
('Riz sauvage'),
('Riz gluant'),
('Riz brun'),
('Pâte brisée'),
('Pâte sablée'),
('Pâte à pizza'),
('Pâte à choux'),
('Pâte feuilletée'),
('Pâte filo'),
('Pâte à crêpes'),
('Pâte à tarte'),
('Levure'),
('Chocolat'),
('Poudre d’amande'),
('Sucre glace'),
('Miel'),
('Cannelle'),
('Lait'),
('Œufs'),
('Farine'),
('Beurre');


 CREATE TABLE Recipe_Ingredient (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity DECIMAL(10,2),
    unit VARCHAR(20),
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES Recipe(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES Ingredient(id) ON DELETE CASCADE
); 
