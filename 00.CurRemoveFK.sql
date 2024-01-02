BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'NHASI';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE NHASI;
GO
--//DROP FK BENHNHAN
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'BENHNHAN';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE BENHNHAN;
GO
--//DROP FK LICHHEN
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'LICHHEN';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE LICHHEN;
GO
--//DROP FK LICHSUKHAMBENH
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'LICHSUKHAMBENH';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE LICHSUKHAMBENH;
--//DROP FK THUOC
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'THUOC';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE THUOC;
--//DROP FK THUOC
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'DICHVU';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE DICHVU;
GO
--//DROP FK THUOC
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'DONTHUOC';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE DONTHUOC;
GO
--//DROP FK THUOC
BEGIN

    DECLARE @stmt VARCHAR(300);

    -- Cursor to generate ALTER TABLE DROP CONSTRAINT statements  
    DECLARE cur CURSOR FOR
     SELECT 'ALTER TABLE ' + OBJECT_SCHEMA_NAME(parent_object_id) + '.' + OBJECT_NAME(parent_object_id) +
                    ' DROP CONSTRAINT ' + name
    FROM sys.foreign_keys
    WHERE OBJECT_SCHEMA_NAME(referenced_object_id) = 'dbo' AND
        OBJECT_NAME(referenced_object_id) = 'DICHVUSUDUNG';

    OPEN cur;
    FETCH cur INTO @stmt;

    -- Drop each found foreign key constraint 
    WHILE @@FETCH_STATUS = 0
     BEGIN
        EXEC (@stmt);
        FETCH cur INTO @stmt;
    END

    CLOSE cur;
    DEALLOCATE cur;

END
  GO

DROP TABLE DICHVUSUDUNG;
GO