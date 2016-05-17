

SELECT recipient 
FROM (SELECT recipient, amount, rn
    FROM 
      ( SELECT recipient, amount,
               ROW_NUMBER() OVER (PARTITION BY recipient
                                  ORDER BY amount DESC
                                 )
                 AS rn
        FROM transfers
      ) tmp 
    WHERE rn <= 3
ORDER BY recipient, rn) tmp2 GROUP BY recipient HAVING sum(amount) >= 1024;


