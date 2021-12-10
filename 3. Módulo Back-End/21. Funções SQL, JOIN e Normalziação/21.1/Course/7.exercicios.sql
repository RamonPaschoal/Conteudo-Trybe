USE hr;

SELECT MAX(SALARY) FROM employees; -- Requisito 1

SELECT MAX(SALARY) - MIN(SALARY) FROM employees; -- Requisito 2

SELECT JOB_ID, AVG(SALARY) AS avg_salary FROM employees GROUP BY JOB_ID ORDER BY avg_salary DESC; -- Requisito 3

SELECT SUM(SALARY) FROM employees; -- Requisito 4

SELECT ROUND(MAX(SALARY), 2), ROUND(MIN(SALARY), 2), ROUND(SUM(SALARY), 2), ROUND(AVG(SALARY), 2) FROM employees; -- Requisito 5

SELECT JOB_ID, COUNT(*) FROM employees WHERE JOB_ID = 'IT_PROG'; -- Requisito 6

SELECT JOB_ID, SUM(SALARY) FROM employees GROUP BY JOB_ID; -- Requisito 7

SELECT JOB_ID, SUM(SALARY) FROM employees WHERE JOB_ID = 'IT_PROG'; -- Requisito 8

SELECT JOB_ID, AVG(SALARY) AS media_salario FROM employees WHERE JOB_ID <> 'IT_PROG' GROUP BY JOB_ID ORDER BY media_salario DESC; -- Requisito 9

SELECT department_id, AVG(SALARY) AS media_salarial, COUNT(*) AS qtd_func FROM employees GROUP BY department_id HAVING qtd_func > 10; -- Requisito 10

UPDATE employees SET PHONE_NUMBER = REPLACE(PHONE_NUMBER, '515', '777') WHERE PHONE_NUMBER LIKE '515%'; -- Requisito 11

SELECT * FROM employees WHERE CHAR_LENGTH(FIRST_NAME) >= 8; -- Requisito 12

SELECT EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) FROM employees; -- Requisito 13

SELECT EMPLOYEE_ID, FIRST_NAME, DAY(HIRE_DATE) FROM employees; -- Requisito 14

SELECT EMPLOYEE_ID, FIRST_NAME, MONTH(HIRE_DATE) FROM employees; -- Requisito 15

SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME)) FROM employees; -- Requisito 16

SELECT LAST_NAME, HIRE_DATE FROM employees WHERE MONTH(HIRE_DATE) = 07 AND YEAR(HIRE_DATE) = 1987; -- Requisito 17

SELECT FIRST_NAME, LAST_NAME, DATEDIFF(DATE(NOW()), DATE(HIRE_DATE)) FROM employees; -- Requisito 18
