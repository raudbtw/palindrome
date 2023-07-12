function isPalindrome(str) {
  // Видаляємо розділові знаки та приводимо рядок до нижнього регістру
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Перевертаємо рядок
  const reversed = str.split("").reverse().join("");

  // Порівнюємо оригінальний рядок з перевернутим
  return str === reversed;
}

console.log(isPalindrome("А роза упала на лапу Азора"));
