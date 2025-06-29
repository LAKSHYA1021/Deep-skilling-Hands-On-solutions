CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500, SYSDATE);

create or replace procedure fund_transfer(
from_account in number,
to_account in number,
amount in number) 
is
v_balance number;
begin
select balance into v_balance
from accounts
where accountid = from_account
for update;
if v_balance<amount then 
raise_application_error(-20001,'Insufficient Fund');
end if;
update accounts
set balance = balance-amount
where accountid = from_account;
update accounts
set lastmodified = sysdate
where accountid = from_account;
update accounts
set balance = balance+amount
where accountid = to_account;
update accounts
set lastmodified = sysdate
where accountid = to_account;

end;
