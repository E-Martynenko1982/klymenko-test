function findSubarraysWithSum(array, targetSum) {
  const results = [];
  const seenSubsequences = new Set();

  function explore(index, currentSubsequence, currentSum) {
    if (currentSum === targetSum) {
      const subsequenceString = currentSubsequence.join(",");

      if (!seenSubsequences.has(subsequenceString)) {
        seenSubsequences.add(subsequenceString);
        results.push([...currentSubsequence]);
      }
    }

    if (index === array.length || currentSum > targetSum) {
      return;
    }

    explore(
      index + 1,
      [...currentSubsequence, array[index]],
      currentSum + array[index]
    );
    explore(index + 1, currentSubsequence, currentSum);
  }

  explore(0, [], 0);

  return results;
}

// Приклади використання:
const array = [2, 4, 6, 3, 1];
const targetSum = 7;
console.log(findSubarraysWithSum(array, targetSum));

const array2 = [1, 2, 3, 4, 5, 6, 7];
const targetSum2 = 7;
console.log(findSubarraysWithSum(array2, targetSum2));

// Алгоритм:
// 1. const results = [];   для збереження всих знайдених унікальних підпослідовностей, що задовольняють умові.
// 2. const seenSubsequences  використовується для відстеження вже знайдених підпослідовностей, щоб уникнути дублікатів у кінцевому результаті
// 3. explore - допоміжна функція
// з параметрами:
// - index: Індекс поточного елемента в array, який розглядається,
// - currentSubsequence: Масив, що представляє підпослідовність, побудовану на даний момент під час рекурсивного спуску.
// - currentSum: Поточна сума елементів у currentSubsequence.
//     if(currentSum === targetSum) { ... }:

// 4. if (currentSum === targetSum) - Перевірка умови: Якщо поточна сума currentSum дорівнює targetSum, знайдено потенційну підпослідовність - кандидата.

// 5. if(index === array.length || currentSum > targetSum) { ... } - Умови зупинки / відсікання рекурсії
// 6. Рекурсивні виклики(Генерація підпослідовностей) де розглядаються два варіанти для кожного елемента array[index]:
// explore(index + 1, [...currentSubsequence, array[index]], currentSum + array[index]);:
// Варіант 1: Включити array[index].Робиться рекурсивний виклик для наступного індексу(index + 1).До поточної підпослідовності додається елемент array[index](створюється новий масив[...currentSubsequence, array[index]]), і поточна сума оновлюється(currentSum + array[index]).
//   explore(index + 1, currentSubsequence, currentSum);:
// Варіант 2: Не включати array[index].Робиться рекурсивний виклик для наступного індексу(index + 1), але поточна підпослідовність currentSubsequence та поточна сума currentSum передаються без змін.
//  (Кінець функції explore)
// 7. explore(0, [], 0) Запускає рекурсивний процес, викликаючи explore вперше.Починаємо з індексу 0, з порожньою початковою підпослідовністю[] та початковою сумою 0.
// 8. return results - повертає масив, що містить усі знайдені унікальні підпослідовності.Якщо жодної підпослідовності не знайдено, масив буде порожнім[].
// Підсумок :
// Функція використовує рекурсію для систематичного перебору всіх можливих способів включення або не включення кожного елемента масиву до підпослідовності.Вона відстежує суму поточної підпослідовності.Коли сума досягає цільового значення, підпослідовність перевіряється на унікальність і додається до результатів.Процес ефективно досліджує дерево всіх можливих підпослідовностей.



