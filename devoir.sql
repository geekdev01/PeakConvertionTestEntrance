-- EXERCICE 2

-- 1. Création de la base de données :

CREATE DATABASE Centre_formation;
USE Centre_formation;


-- 2. Création des tables avec leurs clés primaires et étrangères :

CREATE TABLE ETUDIANT (
    NumCINEtu VARCHAR(20) PRIMARY KEY,
    NomEtu VARCHAR(50) NOT NULL,
    prenomEtu VARCHAR(50) NOT NULL,
    dateNaissance DATE,
    adresseEtu VARCHAR(100),
    villeEtu VARCHAR(50),
    niveauEtu VARCHAR(20)
);

CREATE TABLE SESSION (
    codeSess VARCHAR(20) PRIMARY KEY,
    nomSess VARCHAR(50) NOT NULL,
    dateDebut DATE,
    dateFin DATE
);

CREATE TABLE FORMATION (
    codeForm VARCHAR(20) PRIMARY KEY,
    titreForm VARCHAR(100) NOT NULL,
    dureeForm INTEGER,
    prixForm DECIMAL(10,2)
);

CREATE TABLE SPECIALITE (
    codeSpec VARCHAR(20) PRIMARY KEY,
    nomSpec VARCHAR(50) NOT NULL,
    descSpec TEXT
);

CREATE TABLE INSCRIPTION (
    NumCINEtu VARCHAR(20),
    codeSess VARCHAR(20),
    TypeCours VARCHAR(50),
    PRIMARY KEY (NumCINEtu, codeSess),
    FOREIGN KEY (NumCINEtu) REFERENCES ETUDIANT(NumCINEtu),
    FOREIGN KEY (codeSess) REFERENCES SESSION(codeSess)
);

CREATE TABLE CONCERNE (
    codeSess VARCHAR(20),
    codeForm VARCHAR(20),
    PRIMARY KEY (codeSess, codeForm),
    FOREIGN KEY (codeSess) REFERENCES SESSION(codeSess),
    FOREIGN KEY (codeForm) REFERENCES FORMATION(codeForm)
);

CREATE TABLE APPARTIENT (
    codeSpec VARCHAR(20),
    codeForm VARCHAR(20),
    PRIMARY KEY (codeSpec, codeForm),
    FOREIGN KEY (codeSpec) REFERENCES SPECIALITE(codeSpec),
    FOREIGN KEY (codeForm) REFERENCES FORMATION(codeForm)
);

-- 3. Ajout de la contrainte NOT NULL sur typeCours :

ALTER TABLE INSCRIPTION 
MODIFY COLUMN TypeCours VARCHAR(50) NOT NULL;

-- 4. Ajout de la contrainte CHECK pour la date de fin :

ALTER TABLE SESSION
ADD CONSTRAINT check_dates 
CHECK (dateFin > dateDebut);

-- 5. Ajout de la colonne "Active" à la table SPECIALITE :

ALTER TABLE SPECIALITE
ADD COLUMN Active BOOLEAN DEFAULT TRUE;

