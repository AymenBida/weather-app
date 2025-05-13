const findUnit = (unitBox: HTMLInputElement): string => {
  if (unitBox.checked) {
    return 'C';
  }
  return 'F';
};

const findValue = (temperature: HTMLElement): number => {
  const textContent = temperature.textContent;
  if (!textContent) {
    return NaN;
  }
  const value = parseInt(textContent.slice(0, -3), 10);
  return value;
};

const convert = (unit: string, value: number): number => {
  if (unit === 'F') {
    value = Math.round((value * (9 / 5)) + 32);
  } else {
    value = Math.round((value - 32) * (5 / 9));
  }
  return value;
};

const parseValue = (temperature: HTMLElement, value: number, unit: string): void => {
  temperature.textContent = `${value} °${unit}`;
};

export default function (unitBox: HTMLInputElement, unit: string, temperature: HTMLElement): void {
  unit = findUnit(unitBox);
  let value = findValue(temperature);
  if (isNaN(value)) {
    return;
  }
  value = convert(unit, value);
  parseValue(temperature, value, unit);
}