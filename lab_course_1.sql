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