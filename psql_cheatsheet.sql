PostgreSQL Cheat Sheet

CREATE DATABASE
CREATE DATABASE dbName;
CREATE TABLE (with auto numbering integer id)
CREATE TABLE tableName (
 id serial PRIMARY KEY,
 name varchar(50) UNIQUE NOT NULL,
 dateCreated timestamp DEFAULT current_timestamp
);
Add a primary key
ALTER TABLE tableName ADD PRIMARY KEY (id);
Create an INDEX
CREATE UNIQUE INDEX indexName ON tableName (columnNames);
Backup a database (command line)
pg_dump dbName > dbName.sql
Backup all databases (command line)
pg_dumpall > pgbackup.sql
Run a SQL script (command line)
psql -f script.sql databaseName
Search using a regular expression
SELECT column FROM table WHERE column ~ 'foo.*';
The first N records
SELECT columns FROM table LIMIT 10;
Pagination
SELECT cols FROM table LIMIT 10 OFFSET 30;
Prepared Statements
PREPARE preparedInsert (int, varchar) AS
  INSERT INTO tableName (intColumn, charColumn) VALUES ($1, $2);
EXECUTE preparedInsert (1,'a');
EXECUTE preparedInsert (2,'b');
DEALLOCATE preparedInsert;
Create a Function
CREATE OR REPLACE FUNCTION month (timestamp) RETURNS integer
 AS 'SELECT date_part(''month'', $1)::integer;'
LANGUAGE 'sql';
Table Maintenance
VACUUM ANALYZE table;
Reindex a database, table or index
REINDEX DATABASE dbName;
Show query plan
EXPLAIN SELECT * FROM table;
Import from a file
COPY destTable FROM '/tmp/somefile';
Show all runtime parameters
SHOW ALL;
Grant all permissions to a user
GRANT ALL PRIVILEGES ON table TO username;
Perform a transaction
BEGIN TRANSACTION
 UPDATE accounts SET balance += 50 WHERE id = 1;
COMMIT;
Basic SQL

Get all columns and rows from a table
SELECT * FROM table;
Add a new row
INSERT INTO table (column1,column2)
VALUES (1, 'one');
Update a row
UPDATE table SET foo = 'bar' WHERE id = 1;
Delete a row
DELETE FROM table WHERE id = 1;
