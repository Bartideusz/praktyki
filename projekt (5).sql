-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Mar 2023, 00:07
-- Wersja serwera: 10.4.27-MariaDB
-- Wersja PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `projekt`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `inwentarze`
--

CREATE TABLE `inwentarze` (
  `id` int(11) NOT NULL,
  `nr_laboranta` int(11) NOT NULL,
  `ilosc` int(11) NOT NULL,
  `miejsce` varchar(50) NOT NULL,
  `nazwa` varchar(50) NOT NULL,
  `nr_inwentarzowy` varchar(50) NOT NULL,
  `uzytkownik` varchar(50) NOT NULL,
  `rodzaj` varchar(50) NOT NULL,
  `typ` varchar(50) NOT NULL,
  `wybrakowanie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `inwentarze`
--

INSERT INTO `inwentarze` (`id`, `nr_laboranta`, `ilosc`, `miejsce`, `nazwa`, `nr_inwentarzowy`, `uzytkownik`, `rodzaj`, `typ`, `wybrakowanie`) VALUES
(1, 874354, 6, 'Serwerownia', 'Krzesło', '44/dd/33/22', 'Bartosz.Gruba', 'Elektronika', 'Stanowy', 'Tak'),
(2, 435812, 10, 'Sala 58', 'Monitor', 'bdf/345334', 'O.Zwierzchowski', 'Elektronika', 'Bezstanowy', 'Nie'),
(3, 563425, 5, 'Sala 59', 'Nazwa', '44/324/42df', 'Bartosz.Gruba', 'Mebel', 'Stanowy', 'Nie'),
(4, 874354, 5, 'Serwerownia', 'dddd', '341f/32f3', 'Bartosz.Gruba', 'Elektronika', 'Stanowy', 'Nie'),
(5, 435812, 12, 'Sala 58', 'eeee', '2323/4324', 'O.Zwierzchowski', 'Mebel', 'Bezstanowy', 'Tak'),
(6, 563425, 3, 'Serwerownia', 'ffff', '535/65ght', 'Bartosz.Gruba', 'Inny', 'Bezstanowy', 'Tak'),
(7, 435812, 5, 'Sala 58', 'gggg', '5645/fgt3', 'O.Zwierzchowski', 'Elektronika', 'Stanowy', 'Tak'),
(8, 435812, 20, 'Sala 58', 'hhhh', '5645/rr22', 'Bartosz.Gruba', 'Elektronika', 'Stanowy', 'Tak'),
(9, 874354, 1, 'Serwerownia', 'iiii', '766g/44ee', 'Bartosz.Gruba', 'Elektronika', 'Stanowy', 'Tak'),
(10, 563425, 2, 'Sala 59', 'jjjj', '6456/r33k', 'O.Zwierzchowski', 'Mebel', 'Stanowy', 'Nie'),
(11, 435812, 8, 'Sala 58', 'kkkk', '6756/nn65', 'Bartosz.Gruba', 'Mebel', 'Stanowy', 'Tak'),
(12, 874354, 16, 'Serwerownia', 'llll', '2984/gt55', 'Bartosz.Gruba', 'Inny', 'Inny', 'Nie');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `laboranci`
--

CREATE TABLE `laboranci` (
  `id` int(11) NOT NULL,
  `nr_laborant` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `laboranci`
--

INSERT INTO `laboranci` (`id`, `nr_laborant`) VALUES
(1, 874354),
(2, 435812),
(3, 563425);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miejsca`
--

CREATE TABLE `miejsca` (
  `id` int(11) NOT NULL,
  `miejsce` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `miejsca`
--

INSERT INTO `miejsca` (`id`, `miejsce`) VALUES
(1, 'Serwerownia'),
(2, 'Sala 58'),
(3, 'Sala 59');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `rodzaje`
--

CREATE TABLE `rodzaje` (
  `id` int(11) NOT NULL,
  `rodzaj` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `rodzaje`
--

INSERT INTO `rodzaje` (`id`, `rodzaj`) VALUES
(1, 'Inny');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `typy`
--

CREATE TABLE `typy` (
  `id` int(11) NOT NULL,
  `typ` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Zrzut danych tabeli `typy`
--

INSERT INTO `typy` (`id`, `typ`) VALUES
(1, 'Inny');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `Id_uzytkownika` int(10) NOT NULL,
  `Imie` varchar(50) NOT NULL,
  `Nazwisko` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`Id_uzytkownika`, `Imie`, `Nazwisko`) VALUES
(1, 'Bartosz', 'Gruba'),
(2, 'O', 'Zwierzchowski');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `inwentarze`
--
ALTER TABLE `inwentarze`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `laboranci`
--
ALTER TABLE `laboranci`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `miejsca`
--
ALTER TABLE `miejsca`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `rodzaje`
--
ALTER TABLE `rodzaje`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `typy`
--
ALTER TABLE `typy`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`Id_uzytkownika`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `inwentarze`
--
ALTER TABLE `inwentarze`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT dla tabeli `laboranci`
--
ALTER TABLE `laboranci`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `miejsca`
--
ALTER TABLE `miejsca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `rodzaje`
--
ALTER TABLE `rodzaje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `typy`
--
ALTER TABLE `typy`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `Id_uzytkownika` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
