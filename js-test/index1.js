function getTaskOrder(dependencies) {
  const result = [];
  const completed = new Set();
  const visiting = new Set();

  function resolveTask(task) {
    if (completed.has(task)) {
      return;
    }

    if (visiting.has(task)) {
      throw new Error(
        `Виявлено циклічну залежність: ${task} вже відвідується.`
      );
    }

    visiting.add(task);

    const taskDependencies = dependencies[task];

    if (!taskDependencies || taskDependencies.length === 0) {
    } else {
      for (const dependency of taskDependencies) {
        resolveTask(dependency);
      }
    }

    visiting.delete(task);
    completed.add(task);
    result.push(task);
  }

  const allTasks = Object.keys(dependencies);

  for (const task of allTasks) {
    if (!completed.has(task)) {
      resolveTask(task);
    }
  }
  return result;
}

const tasks = {
  task1: ["task2", "task3"],
  task2: ["task3"],
  task3: [],
  task4: ["task1"],
};

try {
  console.log(getTaskOrder(tasks));
  // Очікуваний результат: ["task3", "task2", "task1", "task4"] (або інший валідний порядок)
} catch (error) {
  console.error(error.message);
}

// Приклад з циклічною залежністю:
const tasksWithCycle = {
  taskA: ["taskB"],
  taskB: ["taskC"],
  taskC: ["taskA"], // Цикл A -> B -> C -> A
};

try {
  console.log(getTaskOrder(tasksWithCycle));
} catch (error) {
  console.error(error.message);
  // Очікуваний результат: Помилка про циклічну залежність
}

// Приклад, де завдання згадується лише як залежність:
const tasksWithImplicit = {
  taskX: ["taskY"],
  taskY: ["taskZ"], // taskZ не має свого запису в `tasksWithImplicit`
};

try {
  console.log(getTaskOrder(tasksWithImplicit));
  // Очікуваний результат: ["taskZ", "taskY", "taskX"] (taskZ буде оброблено коректно)
} catch (error) {
  console.error(error.message);
}
