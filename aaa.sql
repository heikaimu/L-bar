/*
Navicat MySQL Data Transfer

Source Server         : lyw
Source Server Version : 50540
Source Host           : localhost:3306
Source Database       : post_bar

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2017-09-18 16:13:46
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for collect_theme
-- ----------------------------
DROP TABLE IF EXISTS `collect_theme`;
CREATE TABLE `collect_theme` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `theme_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for post_bar
-- ----------------------------
DROP TABLE IF EXISTS `post_bar`;
CREATE TABLE `post_bar` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(128) DEFAULT NULL,
  `details` text NOT NULL,
  `img` text,
  `add_time` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `theme_id` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `details` text NOT NULL,
  `img` text,
  `add_time` datetime NOT NULL,
  `post_bar_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sub_reply
-- ----------------------------
DROP TABLE IF EXISTS `sub_reply`;
CREATE TABLE `sub_reply` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `details` varchar(255) NOT NULL,
  `add_time` datetime NOT NULL,
  `reply_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for theme
-- ----------------------------
DROP TABLE IF EXISTS `theme`;
CREATE TABLE `theme` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `theme` varchar(32) NOT NULL,
  `head_thumb` varchar(256) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `acount` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `head_thumb` varchar(256) NOT NULL,
  `nickname` varchar(32) NOT NULL,
  `sex` int(1) NOT NULL,
  `birth` date NOT NULL,
  `add_time` varchar(16) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;
