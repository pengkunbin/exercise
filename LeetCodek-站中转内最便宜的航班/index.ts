function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const isSrc = flights.some((flight) => {
    if (flight[0] === src) {
      return true;
    }
  });

  const isDst = flights.some((flight) => {
    if (flight[1] === dst) {
      return true;
    }
  });

  if (!isSrc || !isDst) {
    return -1;
  }

  return findFlightValue(flights, Number.MAX_SAFE_INTEGER, src, dst, k);
}

function findFlightValue(flights, value, src, dst, k): number {
  let result;
  flights.forEach((flight) => {
    if (flight[0] === src) {
      if (flight[1] === dst && flight[2] < value) {
        value = flight[2];
      }

      k = k - 1;

      if (k === -1) {
        result = value;
      }

      findFlightValue(flights, value, src, dst, k);
    }
  });
  return result;
}
