const findUnit = (unitBox) => {
  if (unitBox.checked) {
    return 'C';
  }
  return 'F';
};

const findValue = (temperature) => {
  const value = parseInt(temperature.textContent.slice(0, -3), 10);
  return value;
};

const convert = (unit, value) => {
  if (unit === 'F') {
    value = Math.round((value * (9 / 5)) + 32);
  } else {
    value = Math.round((value - 32) * (5 / 9));
  }
  return value;
};

const parseValue = (temperature, value, unit) => {
  temperature.textContent = `${value} °${unit}`;
};

export default function (unitBox, unit, temperature) {
  unit = findUnit(unitBox);
  let value = findValue(temperature);
  if (Number.isNaN(value)) {
    return;
  }
  value = convert(unit, value);
  parseValue(temperature, value, unit);
}