CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);
INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

ALTER TABLE Customers
ADD IsVIP CHAR(1) DEFAULT 'N';


BEGIN
    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
        WHERE Balance > 10000
    )
    LOOP
        UPDATE Customers
        SET IsVIP = 'Y'
        WHERE CustomerID = cust.CustomerID;
        UPDATE Customers
        SET IsVIP = 'N'
        WHERE Balance <= 10000;


        DBMS_OUTPUT.PUT_LINE('Promoted Customer ID ' || cust.CustomerID || ' to VIP');
    END LOOP;

    COMMIT;
END;
