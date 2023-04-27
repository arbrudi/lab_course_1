create database lab_course_1; 

use lab_course_1

CREATE TABLE Client (
User_ID int IDENTITY(100,10) PRIMARY KEY NOT NULL,
Name VARCHAR(255) not null,
Surname VARCHAR(255) not null,
User_Role VARCHAR(255) not null,
Email VARCHAR(255) not null,
Username varchar(255)not null,
Password VARCHAR(255) not null,
)


CREATE TABLE Books(
    ISBN int PRIMARY KEY not null,
    Book_image VARBINARY(MAX),
    Book_title VARCHAR(255) not null,
    Book_author VARCHAR(255) not null,
    Book_genre VARCHAR(255) not null,
    Book_description VARCHAR(MAX) not null,
    
)

Create Table Book_Ratings(
    User_ID int References Client(User_ID) not null,
    ISBN int References Books(ISBN) not null,
    CONSTRAINT PK_Book_Ratings PRIMARY Key (User_ID,ISBN),
    B_Rating int not null
)

Create Table Favorite_Books (
    User_ID int References Client(User_ID) not null,
    ISBN int References Books(ISBN) not null,
    CONSTRAINT PK_Favorite_Books PRIMARY Key (User_ID,ISBN)
)

Create table Book_Comments(
    User_ID int References Client(User_ID) not null,
    ISBN int References Books(ISBN) not null,
    CONSTRAINT PK_Book_Comments PRIMARY Key (User_ID,ISBN),
    B_comments varchar(MAX)
)

CREATE Table Articles(
    Article_ID VARCHAR(50) PRIMARY KEY,
    Article_image VARBINARY(MAX),
    Article_title varchar(255),
    Article_type varchar(50),
    Article_Description VARCHAR(MAX)
)


Create Table Article_Ratings(
    User_ID int References Client(User_ID) not null,
    Article_ID VARCHAR(50) References Articles(Article_ID) not null,
    CONSTRAINT PK_Article_Ratings PRIMARY Key (User_ID, Article_ID),
    A_Rating int not null
)


Create table Article_Comments(
    User_ID int References Client(User_ID) not null,
    Article_ID VARCHAR(50) References Articles(Article_ID) not null,
    CONSTRAINT PK_Article_Comments PRIMARY Key (User_ID,Article_ID),
    A_comments varchar(MAX)

)


CREATE Table Events (
    Event_ID VarChar(255) PRIMARY Key,
    Event_image VARBINARY(MAX),
    Event_description VARCHAR(MAX),
    Event_date date
)


Create table Event_participants (
    Event_ID varchar(255) References Events(Event_ID),
    User_ID int not null References Client(User_ID),
    Constraint PK_Event_participants PRIMARY KEY (User_ID,Event_ID)
)






























Select * from Client
Select * from Books
Select * from Book_Ratings
Select * from Favorite_Books
Select * from Book_Comments

alter table Books 
alter column Book_description VARCHAR(MAX) 

drop table Books

Insert into Client (Name,Surname,User_Role,Email,Password,Username)
VALUES('Arb','Rudi','Admin','arbrudi@gmail.com','Arbi123','arbrudi')

Insert into Books
VALUES ('11111',null,'The 7 wonders of the world','filan fisteku','sci-fi','Hello')
Insert into Books
VALUES ('11112',null,'The 8 wonders of the world','filane fisteku','sci-fi','Hellooooooooooooooooooooooooooooo')

Insert into Book_Ratings
VALUES('100', '11111','5')
Insert into Book_Ratings
VALUES('100', '11112','4')

Insert into Favorite_Books
VALUES('100', '11111')
Insert into Favorite_Books
VALUES('100', '11112')

Insert into Book_Comments
VALUES('100', '11111','The best book I have ever read!')
Insert into Book_Comments
VALUES('100', '11112','Good enough. Highly recommend it!')

Select cl.Name, b.Book_title, br.B_Rating
From Book_Ratings br Inner Join Client cl on br.User_ID = cl.User_ID
INNER JOIN Books b on br.ISBN = b.ISBN