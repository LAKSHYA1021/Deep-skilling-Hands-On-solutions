CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

begin 
for res in (
select c.NAME, c.CUSTOMERID, l.LOANID, l.INTERESTRATE
from LOANS l
join CUSTOMERS c on l.CUSTOMERID = c.CUSTOMERID
where trunc(months_between(sysdate, c.DOB) / 12)>60)
loop
update LOANS
set INTERESTRATE = INTERESTRATE - 1
where LOANID = res.LOANID;
end loop;
end;
