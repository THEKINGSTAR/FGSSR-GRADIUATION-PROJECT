IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [ChatMessages] (
        [Id] int NOT NULL IDENTITY,
        [SenderID] int NOT NULL,
        [TeamID] int NOT NULL,
        [UserID] int NOT NULL,
        [Message] nvarchar(max) NULL,
        [SentAt] datetime2 NOT NULL,
        CONSTRAINT [PK_ChatMessages] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [LearningResources] (
        [Id] int NOT NULL IDENTITY,
        [ResourceName] nvarchar(max) NULL,
        [Description] nvarchar(max) NULL,
        [Tools] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_LearningResources] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [Projects] (
        [Id] int NOT NULL IDENTITY,
        [ProjectName] nvarchar(max) NULL,
        [ProjectBrief] nvarchar(max) NULL,
        [Tools] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [StartDate] datetime2 NOT NULL,
        [EndDate] datetime2 NOT NULL,
        [Active] tinyint NOT NULL,
        [BuildingTools] nvarchar(max) NULL,
        CONSTRAINT [PK_Projects] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [task] (
        [Id] int NOT NULL IDENTITY,
        [TaskName] nvarchar(max) NULL,
        [Description] nvarchar(max) NULL,
        [AssignedTo] int NOT NULL,
        [Status] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [StartDate] datetime2 NOT NULL,
        [EndDate] datetime2 NOT NULL,
        [UserID] int NOT NULL,
        [ProjectID] int NOT NULL,
        CONSTRAINT [PK_task] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [TeamMembers] (
        [TeamMemberID] int NOT NULL IDENTITY,
        [UserID] int NOT NULL,
        [TeamID] int NOT NULL,
        [JoinedAt] datetime2 NOT NULL,
        [LeftAt] datetime2 NOT NULL,
        CONSTRAINT [PK_TeamMembers] PRIMARY KEY ([TeamMemberID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [Teams] (
        [Id] int NOT NULL IDENTITY,
        [TeamName] nvarchar(max) NULL,
        [ProjectID] int NOT NULL,
        [TeamLeader] int NOT NULL,
        [CreatedAt] datetime2 NOT NULL,
        CONSTRAINT [PK_Teams] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [UserLearning] (
        [Id] int NOT NULL IDENTITY,
        [UserID] int NOT NULL,
        [ResourceID] int NOT NULL,
        [Completed] tinyint NOT NULL,
        CONSTRAINT [PK_UserLearning] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [UserProjects] (
        [Id] int NOT NULL IDENTITY,
        [UserID] int NOT NULL,
        [ProjectID] int NOT NULL,
        [Role] nvarchar(max) NULL,
        [TeamName] nvarchar(max) NULL,
        [JoinedAt] datetime2 NOT NULL,
        [LeftAt] datetime2 NOT NULL,
        CONSTRAINT [PK_UserProjects] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    CREATE TABLE [users] (
        [Id] int NOT NULL IDENTITY,
        [UserCode] int NOT NULL,
        [UserName] nvarchar(max) NULL,
        [PasswordSalt] varbinary(max) NULL,
        [PasswordHash] varbinary(max) NULL,
        [Email] nvarchar(max) NULL,
        [PhoneNumber] nvarchar(max) NULL,
        [Websit] nvarchar(max) NULL,
        [JobName] nvarchar(max) NULL,
        [CreatedAt] datetime2 NOT NULL,
        [LastLogin] datetime2 NOT NULL,
        CONSTRAINT [PK_users] PRIMARY KEY ([Id])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20230614115824_inital')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20230614115824_inital', N'7.0.5');
END;
GO

COMMIT;
GO

