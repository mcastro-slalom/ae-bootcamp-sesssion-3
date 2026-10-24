const PRIORITY_STORAGE_KEY = 'todo-task-priorities';

export const PRIORITY_OPTIONS = ['P1', 'P2', 'P3'];
export const DEFAULT_PRIORITY = 'P3';

function readPriorities() {
  try {
    const storedPriorities = JSON.parse(window.localStorage.getItem(PRIORITY_STORAGE_KEY) || '{}');
    return storedPriorities && typeof storedPriorities === 'object' && !Array.isArray(storedPriorities)
      ? storedPriorities
      : {};
  } catch {
    return {};
  }
}

export function saveTaskPriority(taskId, priority) {
  if (taskId == null || !PRIORITY_OPTIONS.includes(priority)) return;

  const priorities = readPriorities();
  priorities[String(taskId)] = priority;
  window.localStorage.setItem(PRIORITY_STORAGE_KEY, JSON.stringify(priorities));
}

export function removeTaskPriority(taskId) {
  const priorities = readPriorities();
  delete priorities[String(taskId)];
  window.localStorage.setItem(PRIORITY_STORAGE_KEY, JSON.stringify(priorities));
}

export function addStoredPriorities(tasks) {
  const priorities = readPriorities();

  return tasks.map(task => ({
    ...task,
    priority: PRIORITY_OPTIONS.includes(task.priority)
      ? task.priority
      : priorities[String(task.id)] || DEFAULT_PRIORITY
  }));
}