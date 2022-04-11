export default class Validator {
  static validateString(value: string) {
    if (value.length < 2)
      throw new Error("Given value must contain at least 2 characters");
  }

  static isFinite(number: number) {
    if (!Number.isFinite(number))
      throw new Error(`Given number (${number}) must have a finite value`);
  }
}
