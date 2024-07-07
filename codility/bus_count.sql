WITH NextHighestTimes AS (
    SELECT
        id,
        Origin,
        Destination,
        Departure,
        LAG(Departure) OVER (PARTITION BY Origin, Destination ORDER BY Departure) AS PreviousDeparture
    FROM
        buses
)
SELECT
    t1.id,
    t1.Origin,
    t1.Destination,
    COUNT(t2.id) AS passengercount
FROM
    NextHighestTimes t1
LEFT JOIN
    passengers t2
ON t2.Departure BETWEEN t1.PreviousDeparture AND t1.Departure
    AND t1.Origin=t2.Origin
    AND t1.Destination=t2.Destination 
GROUP BY
    t1.id, t1.origin, t1.destination;