USE [master]
GO
/****** Object:  Database [SoccerStars]    Script Date: 4/30/2019 11:46:36 AM ******/
CREATE DATABASE [SoccerStars]
 
GO
ALTER DATABASE [SoccerStars] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [SoccerStars].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [SoccerStars] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [SoccerStars] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [SoccerStars] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [SoccerStars] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [SoccerStars] SET ARITHABORT OFF 
GO
ALTER DATABASE [SoccerStars] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [SoccerStars] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [SoccerStars] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [SoccerStars] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [SoccerStars] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [SoccerStars] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [SoccerStars] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [SoccerStars] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [SoccerStars] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [SoccerStars] SET  ENABLE_BROKER 
GO
ALTER DATABASE [SoccerStars] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [SoccerStars] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [SoccerStars] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [SoccerStars] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [SoccerStars] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [SoccerStars] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [SoccerStars] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [SoccerStars] SET RECOVERY FULL 
GO
ALTER DATABASE [SoccerStars] SET  MULTI_USER 
GO
ALTER DATABASE [SoccerStars] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [SoccerStars] SET DB_CHAINING OFF 
GO
ALTER DATABASE [SoccerStars] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [SoccerStars] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [SoccerStars] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'SoccerStars', N'ON'
GO
ALTER DATABASE [SoccerStars] SET QUERY_STORE = OFF
GO
USE [SoccerStars]
GO
/****** Object:  Table [dbo].[Country]    Script Date: 4/30/2019 11:46:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Country](
	[CountryId] [int] IDENTITY(1,1) NOT NULL,
	[Country] [varchar](40) NOT NULL,
	[Abbreviation] [varchar](5) NOT NULL,
 CONSTRAINT [PK_Country_1] PRIMARY KEY CLUSTERED 
(
	[CountryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Player]    Script Date: 4/30/2019 11:46:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Player](
	[PlayerId] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [varchar](40) NOT NULL,
	[Nickname] [varchar](40) NULL,
	[CountryId] [int] NOT NULL,
 CONSTRAINT [PK_Player] PRIMARY KEY CLUSTERED 
(
	[PlayerId] ASC,
	[CountryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Player_Team]    Script Date: 4/30/2019 11:46:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Player_Team](
	[PlayerId] [int] NOT NULL,
	[TeamId] [int] NOT NULL,
	[FromYear] [int] NOT NULL,
	[ToYear] [int] NOT NULL,
 CONSTRAINT [PK_Player_Team_1] PRIMARY KEY CLUSTERED 
(
	[PlayerId] ASC,
	[TeamId] ASC,
	[FromYear] ASC,
	[ToYear] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Team]    Script Date: 4/30/2019 11:46:37 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Team](
	[TeamId] [int] IDENTITY(1,1) NOT NULL,
	[Team] [varchar](40) NOT NULL,
	[Stadium] [varchar](70) NOT NULL,
	[Colors] [varchar](40) NULL,
 CONSTRAINT [PK_Team] PRIMARY KEY CLUSTERED 
(
	[TeamId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Country] ON 

INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (2, N'Brazil', N'BRA')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (3, N'Argentina', N'ARG')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (4, N'England', N'ENG')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (5, N'Italy', N'ITA')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (6, N'Spain', N'SPA')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (7, N'Germany', N'GER')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (8, N'Japan', N'JAP')
INSERT [dbo].[Country] ([CountryId], [Country], [Abbreviation]) VALUES (9, N'France', N'FRA')
SET IDENTITY_INSERT [dbo].[Country] OFF
SET IDENTITY_INSERT [dbo].[Player] ON 

INSERT [dbo].[Player] ([PlayerId], [FullName], [Nickname], [CountryId]) VALUES (2, N'Arthur Antunes Coimbra', N'Zico', 2)
INSERT [dbo].[Player] ([PlayerId], [FullName], [Nickname], [CountryId]) VALUES (3, N'Lionel Messi', N'Messi', 3)
SET IDENTITY_INSERT [dbo].[Player] OFF
INSERT [dbo].[Player_Team] ([PlayerId], [TeamId], [FromYear], [ToYear]) VALUES (2, 1, 1971, 1983)
INSERT [dbo].[Player_Team] ([PlayerId], [TeamId], [FromYear], [ToYear]) VALUES (2, 1, 1985, 1989)
INSERT [dbo].[Player_Team] ([PlayerId], [TeamId], [FromYear], [ToYear]) VALUES (2, 7, 1983, 1985)
INSERT [dbo].[Player_Team] ([PlayerId], [TeamId], [FromYear], [ToYear]) VALUES (2, 8, 1991, 1994)
INSERT [dbo].[Player_Team] ([PlayerId], [TeamId], [FromYear], [ToYear]) VALUES (3, 5, 2000, 0)
INSERT [dbo].[Player_Team] ([PlayerId], [TeamId], [FromYear], [ToYear]) VALUES (3, 9, 1994, 2000)
SET IDENTITY_INSERT [dbo].[Team] ON 

INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (1, N'Flamengo', N'Maracanã', N'Red and Black')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (3, N'River Plate', N'Estadio Monumental Antonio Vespucio Liberti', N'Red and White')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (4, N'Liverpool', N'Anfield', N'Red')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (5, N'Barcelona', N'Camp Nou', N'Blue and Red')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (6, N'Ajax', N'Ajax Stadion', N'Red and White')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (7, N'Udinese', N'Dacia Arena', N'White and Black')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (8, N'Kashima Antlers', N'Kashima Soccer Stadium', N'Bordeaux and Black')
INSERT [dbo].[Team] ([TeamId], [Team], [Stadium], [Colors]) VALUES (9, N'Newell''s Old Boys', N'Estadio Marcelo Bielsa', N'Red and Black')
SET IDENTITY_INSERT [dbo].[Team] OFF
ALTER TABLE [dbo].[Player_Team]  WITH CHECK ADD  CONSTRAINT [Team_Player_Team] FOREIGN KEY([TeamId])
REFERENCES [dbo].[Team] ([TeamId])
GO
ALTER TABLE [dbo].[Player_Team] CHECK CONSTRAINT [Team_Player_Team]
GO
USE [master]
GO
ALTER DATABASE [SoccerStars] SET  READ_WRITE 
GO
