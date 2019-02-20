-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 20, 2019 at 10:40 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hyper_mms007`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(11) NOT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `title` text,
  `description` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_by` int(11) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `end_date` timestamp NULL DEFAULT NULL,
  `lavel` varchar(45) DEFAULT NULL,
  `priority` varchar(45) DEFAULT NULL,
  `close_note` text,
  `close_date` timestamp NULL DEFAULT NULL,
  `close_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `cat_id`, `title`, `description`, `created_at`, `created_by`, `status`, `start_date`, `end_date`, `lavel`, `priority`, `close_note`, `close_date`, `close_by`) VALUES
(1, 2, 'Test 1', 'asd asd', '2019-02-17 05:15:40', 1, 'Inactive', '2019-02-16 18:00:00', '2019-02-26 18:00:00', NULL, 'Medium', NULL, NULL, NULL),
(2, 2, 'Test 1', 'asd asd', '2019-02-17 05:15:51', 1, 'Inactive', '2019-02-16 18:00:00', '2019-02-26 18:00:00', NULL, 'Medium', NULL, NULL, NULL),
(3, 2, 'asdasdasd', 'asdasd', '2019-02-17 05:27:22', 1, 'Active', '2019-02-17 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(4, 2, 'as das', 'as dasd ', '2019-02-17 05:31:56', 1, 'Inactive', '2019-02-25 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(5, 2, 'asda', 'asd', '2019-02-17 05:32:40', 1, 'Active', '2019-02-27 18:00:00', '2019-02-26 18:00:00', NULL, 'High', NULL, NULL, NULL),
(6, 2, 'asd', 'asd', '2019-02-17 05:33:12', 1, 'Active', '2019-02-25 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(7, 2, 'asd', 'asd', '2019-02-17 05:39:45', 1, 'Active', '2019-02-19 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(8, 2, 'asd', 'asd', '2019-02-17 05:40:23', 1, 'Active', '2019-02-27 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(9, 2, 'asd', 'asd', '2019-02-17 05:50:55', 1, 'Active', '2019-02-25 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(10, 2, 'asd', 'asd', '2019-02-17 06:19:55', 1, 'Active', '2019-02-27 18:00:00', '2019-02-26 18:00:00', NULL, 'High', NULL, NULL, NULL),
(11, 2, 'asd', 'asd', '2019-02-17 06:28:57', 1, 'Inactive', '2019-02-25 18:00:00', '2019-02-26 18:00:00', NULL, 'Low', NULL, NULL, NULL),
(12, 2, '\n?? ???? ????????? ???????? ?? ??? ????????????: ?????', '????? ????, ???? ??????? ????, ?? ???????? ??????????????? ???, ??????????? ???????????? ?? ????? ????, ?? ??????? ????????? ???? ????? ?? ????? ???? ????? ??? ?????, ????? ????????? ??????????? ????? ?????? ??????????????? ???????? ?? ???, ???? ???? ?????? ????\n\n???????????? ????? ??? ????? ???? ????, ‘??????? ???? ?????? ????? ??? ???????? ?????? ??, ??????? ??, ???? ?????? ???? ???????? ??? ???? ?????? ???? ?????????? ???????? ???????????? ???????? ?????? ??????? ???? ?? ???, ?? ???? ???????? ???? ???? ??????? ?????? ????? ???? ??????????, ?????????? ?????? ??????? ???, ??? ????? ?? ???? ????? ????’', '2019-02-17 08:11:35', 1, 'Active', '2019-02-26 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(13, 2, 'The Dhaka North City Corporation mayoral post fell vacant following the death of  Annisul Huq on November 30, 2017.', 'Awami League (AL) candidate Atiqul Islam will contest the polls with \"boat\" symbol, while Shafin Ahmed of Jatiya Party (JP) was allocated \"plough\"; Anisur Rahman of National People\'s Party (NPP) got \"mango\"; Progressive Democratic Party\'s Shahin Khan got \"tiger\" and independent candidate Abdur Rahim got \"table clock\".\n\nAfter allocating the symbols, returning officer Abul Kalam requested all candidates to follow the electoral code of conduct during their campaign.\n\nThe candidates can continue their election campaign till midnight of February 26, he said.', '2019-02-19 13:41:57', 1, 'Active', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL, 'High', NULL, NULL, NULL),
(14, 2, 'cating the symbols, returning officer Abul Kalam requested all candidates to follow the elec', 'Awami League (AL) candidate Atiqul Islam will contest the polls with \"boat\" symbol, while Shafin Ahmed of Jatiya Party (JP) was allocated \"plough\"; Anisur Rahman of National People\'s Party (NPP) got \"mango\"; Progressive Democratic Party\'s Shahin Khan got \"tiger\" and independent candidate Abdur Rahim got \"table clock\".\n\nAfter allocating the symbols, returning officer Abul Kalam requested all candidates to follow the electoral code of conduct during their campaign.\n\nThe candidates can continue their election campaign till midnight of February 26, he said.', '2019-02-19 13:42:14', 1, 'Active', '2019-02-18 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL),
(15, 2, 'Awami League (AL) candidate Atiqul Islam will contest the polls with \"boat\" symbol,', 'Awami League (AL) candidate Atiqul Islam will contest the polls with \"boat\" symbol, while Shafin Ahmed of Jatiya Party (JP) was allocated \"plough\"; Anisur Rahman of National People\'s Party (NPP) got \"mango\"; Progressive Democratic Party\'s Shahin Khan got \"tiger\" and independent candidate Abdur Rahim got \"table clock\".\n\nAfter allocating the symbols, returning officer Abul Kalam requested all candidates to follow the electoral code of conduct during their campaign.\n\nThe candidates can continue their election campaign till midnight of February 26, he said.', '2019-02-19 13:50:30', 20003, 'Active', '2019-02-18 18:00:00', '2019-02-27 18:00:00', NULL, 'High', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `activity_refer`
--

CREATE TABLE `activity_refer` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tagged_by` int(11) NOT NULL,
  `tagged_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_type` int(11) NOT NULL COMMENT '1 for member, 2 for sub admin'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `activity_refer`
--

INSERT INTO `activity_refer` (`id`, `activity_id`, `user_id`, `tagged_by`, `tagged_at`, `user_type`) VALUES
(12, 1, 20004, 1, '2019-02-19 06:38:37', 2),
(13, 1, 20003, 1, '2019-02-19 06:38:37', 2),
(14, 1, 20002, 1, '2019-02-19 06:38:37', 2),
(16, 14, 20003, 1, '2019-02-19 13:54:37', 2),
(17, 14, 20002, 1, '2019-02-19 13:54:37', 2),
(18, 3, 20004, 1, '2019-02-20 04:20:01', 2),
(19, 3, 20003, 1, '2019-02-20 04:20:01', 2),
(20, 3, 20002, 1, '2019-02-20 04:20:01', 2);

-- --------------------------------------------------------

--
-- Table structure for table `attachments`
--

CREATE TABLE `attachments` (
  `id` int(11) NOT NULL,
  `act_id` int(11) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `attached_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `attached_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `created_at`) VALUES
(2, 'Techno', '2019-02-14 11:13:10');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `activity_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `comment_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `tagged_by` int(11) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `tagged_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `title`, `tagged_by`, `activity_id`, `tagged_at`) VALUES
(1, 'd', 1, 3, '2019-02-20 06:04:09.575000'),
(5, 'd', 1, 5, '2019-02-20 06:05:33.338000'),
(6, 'as', 1, 5, '2019-02-20 06:05:34.556000'),
(7, 'fff', 1, 5, '2019-02-20 06:05:36.252000'),
(8, 'eee', 1, 5, '2019-02-20 06:05:37.397000'),
(9, 'rrr', 1, 5, '2019-02-20 06:05:38.415000'),
(12, 'd', 1, 3, '2019-02-20 06:28:19.680000');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `zid` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `zemail` varchar(50) NOT NULL,
  `xname` varchar(50) DEFAULT NULL,
  `xaccess` varchar(50) DEFAULT NULL,
  `xarea` varchar(200) NOT NULL,
  `zactive` varchar(50) DEFAULT NULL,
  `xemail` varchar(50) DEFAULT NULL,
  `zpwdh` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`zid`, `user_id`, `zemail`, `xname`, `xaccess`, `xarea`, `zactive`, `xemail`, `zpwdh`) VALUES
(1000, 20005, 'dalimchyjony@gmail.com', 'Dalim Chy.', '3', 'ALL', '1', 'dalimchyjony@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(1000, 1, 'dipok@gmail.com', 'Dipak Chakraborty', '1', 'ALL', '1', 'dipok@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(1000, 20004, 'dipok_dew@yahoo.com', 'Dew', '3', 'ALL', '1', 'dipok_dew@yahoo.com', 'e10adc3949ba59abbe56e057f20f883e'),
(1000, 20003, 'max.nayeem@gmail.com', 'Nayeem', '3', 'ALL', '1', 'max.nayeem@gmail.com', 'e10adc3949ba59abbe56e057f20f883e'),
(1000, 20002, 'rakibhsn@hotmail.com', 'Rakib HSN', '1', 'ALL', '1', 'rakibhsn@hotmail.com', 'e10adc3949ba59abbe56e057f20f883e');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_activities_1_idx` (`created_by`),
  ADD KEY `fk_activities_2_idx` (`cat_id`);

--
-- Indexes for table `activity_refer`
--
ALTER TABLE `activity_refer`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ar_fk1` (`user_id`),
  ADD KEY `ar_fk2` (`activity_id`),
  ADD KEY `ar_fk3` (`tagged_by`);

--
-- Indexes for table `attachments`
--
ALTER TABLE `attachments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_attachments_1_idx` (`act_id`),
  ADD KEY `fk_attachments_2_idx` (`attached_by`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_fk1` (`activity_id`),
  ADD KEY `c_fk2` (`user_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tags_1_idx` (`tagged_by`),
  ADD KEY `fk_tags_2_idx` (`activity_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`zid`,`zemail`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `activity_refer`
--
ALTER TABLE `activity_refer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `attachments`
--
ALTER TABLE `attachments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20006;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `fk_activities_1` FOREIGN KEY (`created_by`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_activities_2` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `activity_refer`
--
ALTER TABLE `activity_refer`
  ADD CONSTRAINT `ar_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ar_fk2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ar_fk3` FOREIGN KEY (`tagged_by`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `attachments`
--
ALTER TABLE `attachments`
  ADD CONSTRAINT `fk_attachments_1` FOREIGN KEY (`act_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_attachments_2` FOREIGN KEY (`attached_by`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `c_fk1` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `c_fk2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tags`
--
ALTER TABLE `tags`
  ADD CONSTRAINT `fk_tags_1` FOREIGN KEY (`tagged_by`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_tags_2` FOREIGN KEY (`activity_id`) REFERENCES `activities` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
