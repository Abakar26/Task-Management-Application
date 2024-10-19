'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTasks } from '../api/taskService';
import { Task } from '../types/task';

export default function TaskListPage() {
  const [tasks, setTask] = useState<Task[] | null>(null);

  useEffect(() => {
    async function fetchTask() {
      const fetchedTask = await getTasks();
      setTask(fetchedTask);
    }
    fetchTask();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link href="/tasks/new" className="px-4 py-2 bg-green-500 text-white rounded">
        Create New Task
      </Link>
      <ul className="mt-4">
        {tasks?.map((task: Task) => (
          <li key={task.id} className="flex justify-between items-center p-2 bg-gray-100 mb-2 rounded text-black">
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.isCompleted ? 'Completed' : 'Pending'}</p>
            </div>
            <Link href={`/tasks/${task.id}`} className="px-4 py-2 bg-blue-500 text-white rounded">
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
