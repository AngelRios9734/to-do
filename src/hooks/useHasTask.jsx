import { useEffect, useState } from "react";

export function useHasTask(task, setTask) {
  const [hasTask, setHasTask] = useState(false)

  useEffect(() => {
    setHasTask(task.length > 1);
    window.localStorage.setItem('task', JSON.stringify(task));
  }, [task])

  const handleReset = () => {
    setTask([]);
    setHasTask(false);
  };

  return{ hasTask, setHasTask, handleReset}
}