-- Write a SQL query to find all duplicate emails in a table named Person.

-- +----+---------+
-- | Id | Email   |
-- +----+---------+
-- | 1  | a@b.com |
-- | 2  | c@d.com |
-- | 3  | a@b.com |
-- +----+---------+
-- For example, your query should return the following for the above table:

-- +---------+
-- | Email   |
-- +---------+
-- | a@b.com |
-- +---------+
-- Note: All emails are in lowercase.

-- First solution - using COUNT
SELECT
    Email
FROM
    Person
GROUP BY
    Email
HAVING
    COUNT(Email) > 1

-- Second solution.  Probably the more naive approach.. builds a table grouping 
-- duplicates as num, then gets answer from there.
SELECT Email FROM(
    SELECT
        Email, count(Email) as num
    FROM
        Person
    GROUP BY
        Email
) AS _temp
WHERE
    num > 1
;