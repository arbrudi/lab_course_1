-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2023 at 03:19 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `idk`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `Article_ID` varchar(50) NOT NULL,
  `Article_image` mediumtext DEFAULT NULL,
  `Article_title` varchar(255) DEFAULT NULL,
  `Article_type` varchar(50) DEFAULT NULL,
  `Article_Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`Article_ID`, `Article_image`, `Article_title`, `Article_type`, `Article_Description`) VALUES
('1111111', 'data:image/png;base64,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', 'The Fastest Way to Learn React', 'Informative', 'Welcome! Today we\'re going to be talking about the fastest way to             learn React. We\'ll be discussing some topics such as proin congue             ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.              Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,              non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut              eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at              sodales purus euismod.`,             `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.              Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan              nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus              sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor              interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id              consequat quam. Vivamus accumsan dui in facilisis aliquet.`,             `Etiam nec lectus urna. Sed sodales ultrices dapibus.              Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan              nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus              sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor              interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id              consequat quam. Vivamus accumsan dui in facilisis aliquet.'),
('1111112', 'data:image/png;base64,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', 'How to Build a Node Server in 10 Minutes', 'Informative', 'In this article, we\'re going to be talking looking at a very quick way             to set up a Node.js server. We\'ll be discussing some topics such as proin congue             ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo.              Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis,              non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut              eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at              sodales purus euismod.`,             `Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus.              Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan              nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus              sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor              interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id              consequat quam. Vivamus accumsan dui in facilisis aliquet.`,             `Etiam nec lectus urna. Sed sodales ultrices dapibus.              Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan              nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus              sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor              interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id              consequat quam. Vivamus accumsan dui in facilisis aliquet.'),
('1111113', 'https://miro.medium.com/v2/resize:fit:750/0*GpOUO1n2m49hMkbh.jpg', '10 Best CSS Online Courses for Beginners and Experienced Developers in 2023', 'Programing ', 'This is the best-selling CSS course at Udemy. It starts from CSS basics, gradually moving to the next-level advanced CSS concepts. In the course, you will dive deep into some of the most important and widely used CSS concepts.'),
('1111114', 'https://www.usnews.com/static/img/badge-best-grad-schools.svg', 'Best Computer Science Schools', 'Inforamtion', 'Earning a graduate degree in computer science can lead to positions in research institutions, government agencies, technology companies and colleges and universities. These are the top computer science schools. Each school\'s score reflects its average rating on a scale from 1 (marginal) to 5 (outstanding), based on a survey of academics at peer institutions');

-- --------------------------------------------------------

--
-- Table structure for table `article_comments`
--

CREATE TABLE `article_comments` (
  `User_ID` int(11) NOT NULL,
  `Article_ID` varchar(50) NOT NULL,
  `A_comments` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `article_ratings`
--

CREATE TABLE `article_ratings` (
  `User_ID` int(11) NOT NULL,
  `Article_ID` varchar(50) NOT NULL,
  `A_Rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `benefits`
--

CREATE TABLE `benefits` (
  `Benefit_ID` int(11) NOT NULL,
  `Benefit_img` mediumtext NOT NULL,
  `Benefit_title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `benefits`
--

INSERT INTO `benefits` (`Benefit_ID`, `Benefit_img`, `Benefit_title`) VALUES
(1, 'https://icon-library.com/images/free-icon/free-icon-9.jpg', 'Totally free'),
(2, 'https://static.thenounproject.com/png/2850958-200.png', 'Support local bookstores'),
(3, 'https://i.pinimg.com/originals/35/3d/04/353d0497b3728c28898c27dc0f307045.jpg', 'No string (bookmarks) attached '),
(4, 'https://static.vecteezy.com/system/resources/previews/018/729/816/non_2x/rating-icon-grade-illustration-sign-review-symbol-comment-logo-vector.jpg', 'Easy Rating ');

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `ISBN` int(11) NOT NULL,
  `Book_image` mediumtext DEFAULT NULL,
  `Book_title` varchar(255) NOT NULL,
  `Book_author` varchar(255) NOT NULL,
  `Book_genre` varchar(255) NOT NULL,
  `Book_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`ISBN`, `Book_image`, `Book_title`, `Book_author`, `Book_genre`, `Book_description`) VALUES
(0, 'https://cdn2.penguin.com.au/covers/original/9780141362250.jpg', 'Percy Jackson\'s Greek Heroes', 'Rick Riordan', 'Novel', 'IF YOU LIKE POISONINGS, BETRAYALS, MUTILATIONS, MURDERS AND FLESH-EATING FARMYARD ANIMALS, KEEP READING . . .In this gripping follow-up to Percy Jackson and the Greek Gods, demigod Percy Jackson tells the stories of twelve of the original Greek heroes in all their gory, bloodthirsty glory'),
(111113, 'https://cdn2.penguin.com.au/covers/original/9780141346830.jpg', 'The Battle of the Labyrinth', 'Rick Riordan', 'Novel', 'The Battle of the Labyrinth is an American fantasy-adventure novel based on Greek mythology written by Rick Riordan. It is the fourth novel in the Percy Jackson & the Olympians series.'),
(111115, 'https://books.disney.com/content/uploads/2019/05/148478233X.jpg', 'Percy Jackson and the Last Olympian', 'Rick Riordan', 'Novel', 'The Last Olympian is a fantasy-adventure novel based on Greek mythology by Rick Riordan, published on May 5, 2009. It is the fifth and final novel of the Percy Jackson & the Olympians series and serves as the direct sequel to The Battle of the Labyrinth.'),
(111116, 'https://books.disney.com/content/uploads/2021/05/1423183657-scaled.jpg', 'Percy Jackson\'s Greek Gods', 'Rick Riordan', 'Novel', 'Percy Jackson\'s Greek Gods is a collection of short stories about Greek mythology as narrated by Percy Jackson. It was written by Rick Riordan and was released on August 19, 2014. It features Percy Jackson giving his own take on the Greek myths in a humorous way. '),
(111117, 'https://m.media-amazon.com/images/I/91gJgXvn+jL._AC_UF894,1000_QL80_.jpg', 'A Dance with Dragons', 'Rick Riordan', 'Novel', 'A Dance with Dragons is the fifth novel of seven planned in the epic fantasy series A Song of Ice and Fire by American author George R. R. Martin. In some areas, the paperback edition was published in two parts, titled Dreams and Dust and After the Feast.'),
(121111, 'https://m.media-amazon.com/images/I/71yECDCve6L._AC_UF1000,1000_QL80_.jpg', 'Burning in water drowning in flame', 'Charles Bukowski', 'Poetry', 'This volume collects poetry from some of the author\'s previous books, as well as new work. Includes \"It Catches My Heart in Its Hands (Poems 1955-1963)\", \"Crucifix in a Deathhand (Poems 1963-1965)\", \"At Terror Street and Agony Way (Poems 1965-1968)\", and \"Burning in Water, Drowning in Flame (Poems 1972-1973)\"'),
(978014, 'https://m.media-amazon.com/images/I/91LptBSFxQL._AC_UF1000,1000_QL80_.jpg', 'The Lightning Thief', 'Rick Riordan', 'Novel', 'The Lightning Thief is a 2005 American fantasy-adventure novel based on Greek mythology, the first young adult novel written by Rick Riordan in the Percy Jackson & the Olympians series. It won the Adult Library Services Association Best Books for Young Adults, among other awards.'),
(1111112, 'https://m.media-amazon.com/images/I/9167S2BLeFL._AC_UF1000,1000_QL80_.jpg', 'The Titan\'s Curse', 'Rick Riordan', 'Novel', 'The Titan\'s Curse is an American fantasy-adventure novel based on Greek mythology written by Rick Riordan. It was released on May 1, 2007, and is the third novel in the Percy Jackson & the Olympians series and the sequel to The Sea of Monsters.'),
(1111114, 'https://cdn2.penguin.com.au/covers/original/9780141346885.jpg', 'The Last Olympian', 'Rick Riordan', 'Novel', 'The Last Olympian is a fantasy-adventure novel based on Greek mythology by Rick Riordan, published on May 5, 2009. It is the fifth and final novel of the Percy Jackson & the Olympians series and serves as the direct sequel to The Battle of the Labyrinth.'),
(1111119, 'https://m.media-amazon.com/images/I/81m18fYAXHL._AC_UF1000,1000_QL80_.jpg', 'Poetry Pharmacy', 'William Sieghart', 'Poetry', '\'Truly a marvellous collection ... There is balm for the soul, fire for the belly, a cooling compress for the fevered brow, solace for the wounded, an arm around the lonely shoulder - the whole collection is a matchless compound of hug, tonic and kiss\' Stephen FrySometimes only a poem will do.'),
(1111181, 'https://m.media-amazon.com/images/I/71bgEXTZHAL._AC_UF1000,1000_QL80_.jpg', 'You get so alone at times that it just makes sense', 'Charles Bukowski', 'Poetry', 'Charles Bukowski examines cats and his childhood in You Get So Alone at Times, a book of poetry that reveals his tender side.'),
(1112511, 'https://prodimage.images-bn.com/pimages/9780692921487_p0_v1_s1200x630.jpg', 'Dancing in the dark', 'Melody Anne', 'Confession', 'Breakout author Chris Alan teams up with NYT\'s bestselling author Melody Anne in a stimulating thriller series that brings a whole new twist to happily-ever-after. This book will have you longing to be the predator\'s next target.'),
(2147483647, 'https://m.media-amazon.com/images/I/51jjSOMQx+L._SY344_BO1,204,203,200_.jpg', 'The Sea of Monsters', 'Rick Riordan', 'Novel', 'The Sea of Monsters is an American fantasy-adventure novel based on Greek mythology written by Rick Riordan and published in 2006. It is the second novel in the Percy Jackson & the Olympians series and the sequel to The Lightning Thief.');

-- --------------------------------------------------------

--
-- Table structure for table `book_comments`
--

CREATE TABLE `book_comments` (
  `User_ID` int(11) NOT NULL,
  `ISBN` int(11) NOT NULL,
  `B_comments` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `book_ratings`
--

CREATE TABLE `book_ratings` (
  `User_ID` int(11) NOT NULL,
  `ISBN` int(11) NOT NULL,
  `B_Rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `User_ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Surname` varchar(255) NOT NULL,
  `User_Role` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`User_ID`, `Name`, `Surname`, `User_Role`, `Email`, `Username`, `Password`) VALUES
(101, 'arb', 'rudi', 'admin', 'arb@gmail.com', 'arbi', '1234'),
(102, 'Eris', 'Beselica', 'admin', 'eris@gmail.com', 'eris', '1234'),
(103, 'Leke', 'Zeqiri', 'admin', 'lz@gmail.com', 'lekez', '1234'),
(104, 'Rione', 'Hazrolli', 'admin', 'rh@gmail.com', 'rioneh', '1234'),
(105, 'test', 'test', 'user', 'test@user.com', 'test', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `contact_us`
--

CREATE TABLE `contact_us` (
  `Contact_ID` int(11) NOT NULL,
  `Contact_email` varchar(255) DEFAULT NULL,
  `Contact_number` int(11) DEFAULT NULL,
  `Contact_address` varchar(255) DEFAULT NULL,
  `Contact_city` varchar(50) DEFAULT NULL,
  `Contact_postal_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_us`
--

INSERT INTO `contact_us` (`Contact_ID`, `Contact_email`, `Contact_number`, `Contact_address`, `Contact_city`, `Contact_postal_code`) VALUES
(222, 'admin@user.com', 45888888, 'Oso Kuka', 'Peje', 30000),
(1111, 'admin@admin.com', 49123123, 'Dardani', 'Prishtine', 10000);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `Event_ID` varchar(255) NOT NULL,
  `Event_image` mediumtext DEFAULT NULL,
  `Event_description` text DEFAULT NULL,
  `Event_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`Event_ID`, `Event_image`, `Event_description`, `Event_date`) VALUES
('222222', 'https://images.pexels.com/photos/5905557/pexels-photo-5905557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Teaching Classes: The secrets that not everyone knows!', '2023-07-01'),
('aasdfgsa', 'https://images.pexels.com/photos/5905702/pexels-photo-5905702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Online Trivia Session with Lauren Marren and Elizabeth Ferras', '2023-06-23'),
('E1111', 'https://images.pexels.com/photos/4861347/pexels-photo-4861347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'In Place Workshop: How to craft an enthralling story for your book!', '2023-06-27');

-- --------------------------------------------------------

--
-- Table structure for table `event_participants`
--

CREATE TABLE `event_participants` (
  `Event_ID` varchar(255) NOT NULL,
  `User_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favorite_articles`
--

CREATE TABLE `favorite_articles` (
  `User_ID` int(11) NOT NULL,
  `Article_ID` varchar(50) NOT NULL,
  `Article_list_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `favorite_articles`
--

INSERT INTO `favorite_articles` (`User_ID`, `Article_ID`, `Article_list_name`) VALUES
(105, '1111111', NULL),
(105, '1111114', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `favorite_books`
--

CREATE TABLE `favorite_books` (
  `User_ID` int(11) NOT NULL,
  `ISBN` int(11) NOT NULL,
  `Book_list_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `News_ID` int(255) NOT NULL,
  `News_title` varchar(255) NOT NULL,
  `News_description` varchar(2000) NOT NULL,
  `News_tags` varchar(100) NOT NULL,
  `Publishing_date` date NOT NULL,
  `News_image` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`News_ID`, `News_title`, `News_description`, `News_tags`, `Publishing_date`, `News_image`) VALUES
(7, 'Android 14 mund të sjellë funksionin e shëndetit në telefona dhe tableta', 'iOS ka një veçori “Battery Health” që mungon si një veçori origjinale në Android për të treguar kapacitetin maksimal të mbetur në baterisë e pajisjes. Megjithatë, Android 14 mund ta sjellë atë në të gjitha pajisjet Android kur versioni i tij përfundimtar do të lansohet.\r\n\r\nIsh-inxhinieri i XDA-Developers, Mishaal Rahman ka zbuluar se Google shtoi disa API të reja “BatteryManager” në Android 14 beta, raporton GSM Arena.', 'IOS 14', '2023-06-06', 'https://telegrafi.com/wp-content/uploads/2023/06/1312797327102050307-1130x635.jpg'),
(8, 'Prezantohen Nokia C110 dhe C300 – publikohen specifikat dhe çmimet', 'MD Global prezantoi 2 telefona të rinj të nivelit fillestar për tregun amerikan. Nokia C110 sjell një ekran LCD 6.3 inç me rezolucion HD+ dhe një çip MediaTek Helio P22, ndërsa Nokia C300 përmban një ekran LCD 6,52 inç me të njëjtën rezolucion dhe një çip Snapdragon 662 SoC. Nokia C110 përmban një kamerë të vetme 13MP në anën e pasme dhe një blic LED ndërsa C300 shton një sensor 2MP për fotografi me detaje të thella dhe kamerë makro gjithashtu me 2MP.\r\n\r\nGSM Arena raporton se modeli C300 gjithashtu ke një kamerë selfie 8MP ndërsa C110 përmban një modul 5MP. Të dyja pajisjet e reja ofrohen me 3', 'NOKIA', '2023-06-06', 'https://telegrafi.com/wp-content/uploads/2016/12/nokia-1-1.jpeg'),
(12, 'Lirë, shpejt dhe lehtë: Si të bëni balona artificialë me helium', 'Është fakt që balonat të cilët ju i punoni, nuk do të qëndrojnë pezull në tavan mu si ata të mbushur me helium, por mund të jenë zëvendësim adekuat dhe i lirë.\n\nAjo që do t’ju nevojitet, pos balonave, me siguri e keni në kuzhinën tuaj, transmeton Telegrafi.\n\nSiguroni këto gjëra:\n\n– disa balona\n– një shishe e zbrazët plastike një litërshe apo një litërshe e gjysmë\n– hinka\n– uthulla\n– soda e bukës', 'Lire', '2023-06-07', 'https://telegrafi.com/wp-content/uploads/2023/06/Playing-With-Helium-Latest-Case-St-1130x635.jpg'),
(2221322, 'US judge temporarily blocks Microsoft acquisition of Activision', 'A US judge late on Tuesday granted the Federal Trade Commission’s (FTC) request to temporarily block Microsoft Corp’s acquisition of video game maker Activision Blizzard and set a hearing next week.\n\nUS District Judge Edward Davila scheduled a two-day evidentiary hearing on the FTC’s request for a preliminary injunction for June 22-23 in San Francisco. Without a court order, Microsoft could have closed on the $69 billion deal as early as Friday.\n\nThe FTC, which enforces antitrust law, asked an administrative judge to block the transaction in early December. An evidential hearing in the administrative proceeding is set to begin Aug. 2.\n\nBased on the late-June hearing, the federal court will decide whether a preliminary injunction — which would last during the administrative review of the case — is necessary. The FTC sought the temporary block on Monday.\n\nDavila said the temporary restraining order issued on Tuesday “is necessary to maintain the status quo while the complaint is pending (and) preserve this court’s ability to order effective relief in the event it determines a preliminary injunction is warranted and preserve the FTC’s ability to obtain an effective permanent remedy in the event that it prevails in its pending administrative proceeding.”\n\nMicrosoft (MSFT) and Activision (ATVI) must submit legal arguments opposing a preliminary injunction by June 16; the FTC must reply on June 20.\nActivision, which said Monday the FTC decision to seek a federal court order was “a welcome update and one that accelerates the legal process,” declined to comment Tuesday.\n\nMicrosoft said Tuesday “accelerating the legal process in the U.S will ultimately bring more choice and competition to the gaming market. A temporary restraining order makes sense until we can receive a decision from the court, which is moving swiftly.”\n\nThe FTC declined to comment.\n\nDavila said the bar on closing will remain in place until at least five days after the court rules on the preliminary injunct', 'Microsoft', '2023-06-14', 'https://media.cnn.com/api/v1/images/stellar/prod/230613214717-microsoft-2023.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `Partner_ID` int(11) NOT NULL,
  `Partner_image` mediumtext DEFAULT NULL,
  `Partner_name` varchar(255) DEFAULT NULL,
  `Partner_description` varchar(600) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`Partner_ID`, `Partner_image`, `Partner_name`, `Partner_description`) VALUES
(11111111, 'data:image/png;base64,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', 'Google', 'Google has been our golden partner ever since the start'),
(22223, 'https://www.ubt-uni.net/wp-content/themes/university-of-business-and-technology/repository/logo.png', 'UBT', 'UBT');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `Reviews_ID` int(11) NOT NULL,
  `Reviewer_Name` varchar(255) DEFAULT NULL,
  `Reviewer_Surname` varchar(255) DEFAULT NULL,
  `Reviews_Comment` varchar(600) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`Reviews_ID`, `Reviewer_Name`, `Reviewer_Surname`, `Reviews_Comment`) VALUES
(1001, 'Filan ', 'Fisteku', 'Outstanding system. Keep up the good work!'),
(1002, 'Filane', 'Fisteku', 'Although the system works well, I\'d work more on the UI. '),
(1003, 'Asterix', 'Felix', 'Really polite! Thanks so much for letting me test your system. Can\'t wait for the final version of the project to be released!'),
(1004, 'Buna', 'Hashimi', 'Don\'t forget to tailor a well-thought-out plan!'),
(1005, 'Beth', 'Hathaway', 'Good job! Smth smth smth.....'),
(1006, 'test', 'test', 'test 123 '),
(1007, 'idk', 'idk', 'idk idk idk idk ');

-- --------------------------------------------------------

--
-- Table structure for table `slider_controller`
--

CREATE TABLE `slider_controller` (
  `Slider_ID` int(11) NOT NULL,
  `Slider_image` mediumtext DEFAULT NULL,
  `Slider_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slider_controller`
--

INSERT INTO `slider_controller` (`Slider_ID`, `Slider_image`, `Slider_name`) VALUES
(1, 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '1'),
(2, 'https://images.pexels.com/photos/1329571/pexels-photo-1329571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '2'),
(3, 'https://images.pexels.com/photos/1475276/pexels-photo-1475276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', '3');

-- --------------------------------------------------------

--
-- Table structure for table `text_section`
--

CREATE TABLE `text_section` (
  `Text_section_id` int(11) NOT NULL,
  `Text_section_title` varchar(255) DEFAULT NULL,
  `Text_section_description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `text_section`
--

INSERT INTO `text_section` (`Text_section_id`, `Text_section_title`, `Text_section_description`) VALUES
(1, 'Who are we?', 'elibrary is an application that will help students and other people to have access to different books and articles.\n        The material we offer includes a wide range and different genres of art, culture, sports, IT, health and much more. Users will have the opportunity\n        to access the e-bookstore where they will be able to get books, place read books in their reading library, like books, post comments about different\n        books, rate them, access articles, the various news and magazines that are located in our web application. Customers will have the opportunity to make requests\n        about the various books that they want to be part of our electronic system. Also, various events will be organized where users can take part.'),
(2, 'Missions & Goals', 'The missions and goals of our elibrary is to offer:\n        Providing access to a wide range of digital resources such as e-books, research papers, magazines\n        and other multimedia materials.\n        Supporting research and education by providing users with access to reliable, authoritative and up-to-date information.\n        Ensuring equal access: Another important mission is to ensure that all users, regardless of location, socio-economic status or physical abilities, have equal\n        access to the digital resources and services provided.\n        Supporting sustainable development reducing the need for physical resources such as paper and ink and providing environmentally friendly digital alternatives.\n        Providing personalized services to users such as personalized reading recommendations, alerts for new material and access to specialized resources tailored to\n        specific research interests or topics.\n        Supporting education and research by providing resources'),
(3, 'Work with us', 'eLibrary is open to everyone who wants to create a collaboration and partnership together to be more successful in achieving goals\n    and providing the best services for clients. Partnership with others is very important to us, that\'s why we are very cooperative.\n    The client has the possibility of donating various donations, whether money, old books or something else, and this would also help other\n    users to have a collection of different books. Whoever wants to organize events, we are open to organize together to help users gain\n    new knowledge. Partnership with others would help us to create new experiences and to offer users a wider range of services.\n    Anyone who wants to create a partnership with us or wants to donate can contact us through the data found in our application.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`Article_ID`);

--
-- Indexes for table `article_comments`
--
ALTER TABLE `article_comments`
  ADD PRIMARY KEY (`User_ID`,`Article_ID`),
  ADD KEY `Article_ID` (`Article_ID`);

--
-- Indexes for table `article_ratings`
--
ALTER TABLE `article_ratings`
  ADD PRIMARY KEY (`User_ID`,`Article_ID`),
  ADD KEY `Article_ID` (`Article_ID`);

--
-- Indexes for table `benefits`
--
ALTER TABLE `benefits`
  ADD PRIMARY KEY (`Benefit_ID`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`ISBN`);

--
-- Indexes for table `book_comments`
--
ALTER TABLE `book_comments`
  ADD PRIMARY KEY (`User_ID`,`ISBN`),
  ADD KEY `ISBN` (`ISBN`);

--
-- Indexes for table `book_ratings`
--
ALTER TABLE `book_ratings`
  ADD PRIMARY KEY (`User_ID`,`ISBN`),
  ADD KEY `ISBN` (`ISBN`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`User_ID`);

--
-- Indexes for table `contact_us`
--
ALTER TABLE `contact_us`
  ADD PRIMARY KEY (`Contact_ID`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`Event_ID`);

--
-- Indexes for table `event_participants`
--
ALTER TABLE `event_participants`
  ADD PRIMARY KEY (`User_ID`,`Event_ID`),
  ADD KEY `Event_ID` (`Event_ID`);

--
-- Indexes for table `favorite_articles`
--
ALTER TABLE `favorite_articles`
  ADD PRIMARY KEY (`User_ID`,`Article_ID`),
  ADD KEY `Article_ID` (`Article_ID`);

--
-- Indexes for table `favorite_books`
--
ALTER TABLE `favorite_books`
  ADD PRIMARY KEY (`User_ID`,`ISBN`),
  ADD KEY `ISBN` (`ISBN`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`News_ID`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`Reviews_ID`);

--
-- Indexes for table `slider_controller`
--
ALTER TABLE `slider_controller`
  ADD PRIMARY KEY (`Slider_ID`);

--
-- Indexes for table `text_section`
--
ALTER TABLE `text_section`
  ADD PRIMARY KEY (`Text_section_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `benefits`
--
ALTER TABLE `benefits`
  MODIFY `Benefit_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2346;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `User_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `News_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2221323;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `article_comments`
--
ALTER TABLE `article_comments`
  ADD CONSTRAINT `article_comments_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `article_comments_ibfk_2` FOREIGN KEY (`Article_ID`) REFERENCES `articles` (`Article_ID`);

--
-- Constraints for table `article_ratings`
--
ALTER TABLE `article_ratings`
  ADD CONSTRAINT `article_ratings_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `article_ratings_ibfk_2` FOREIGN KEY (`Article_ID`) REFERENCES `articles` (`Article_ID`);

--
-- Constraints for table `book_comments`
--
ALTER TABLE `book_comments`
  ADD CONSTRAINT `book_comments_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `book_comments_ibfk_2` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`);

--
-- Constraints for table `book_ratings`
--
ALTER TABLE `book_ratings`
  ADD CONSTRAINT `book_ratings_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `book_ratings_ibfk_2` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`);

--
-- Constraints for table `event_participants`
--
ALTER TABLE `event_participants`
  ADD CONSTRAINT `event_participants_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `event_participants_ibfk_2` FOREIGN KEY (`Event_ID`) REFERENCES `events` (`Event_ID`);

--
-- Constraints for table `favorite_articles`
--
ALTER TABLE `favorite_articles`
  ADD CONSTRAINT `favorite_articles_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `favorite_articles_ibfk_2` FOREIGN KEY (`Article_ID`) REFERENCES `articles` (`Article_ID`);

--
-- Constraints for table `favorite_books`
--
ALTER TABLE `favorite_books`
  ADD CONSTRAINT `favorite_books_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `client` (`User_ID`),
  ADD CONSTRAINT `favorite_books_ibfk_2` FOREIGN KEY (`ISBN`) REFERENCES `books` (`ISBN`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
