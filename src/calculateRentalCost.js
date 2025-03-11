/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total;
  const costPerDay = 40;

  if (days >= 7) {
    total = costPerDay * days - 50;
  } else if (days >= 3) {
    total = costPerDay * days - 20;
  } else {
    total = costPerDay * days;
  }

  return total;
}

module.exports = calculateRentalCost;
