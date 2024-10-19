// app/tasks/[id]/page.tsx
'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTaskById, updateTask, deleteTask } from '../../api/taskService';
import { Task } from '@/app/types/task';

export default function EditTaskPage() {
  const [task, setTask] = useState<Task | null>(null); // Use Task type here
  const { id } = useParams();
  const router = useRouter();

  const taskId = typeof id === 'string' ? parseInt(id, 10) : 0;

  useEffect(() => {
    async function fetchTask() {
      const fetchedTask = await getTaskById(taskId);
      setTask(fetchedTask);
    }
    fetchTask();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(task){
      await updateTask(taskId, task);
      router.push('/tasks');
    }
  };

  const handleDelete = async () => {
    await deleteTask(taskId);
    router.push('/tasks');
  };

  const handleBack = () =>{
    router.push('/tasks');
  }

  if (!task) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md text-black mt-16">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="w-full p-2 rounded border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Description</label>
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="w-full p-2 rounded border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Status</label>
        <select
          value={task.isCompleted.toString()} // Convert boolean to string for the select
          onChange={(e) => setTask({ ...task, isCompleted: e.target.value === 'true' })}
        >
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
          Save
        </button>
        <button type="button" onClick={handleBack} className="px-4 py-2 bg-blue-500 text-white rounded">
          Back
        </button>
        <button type="button" onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded">
          Delete
        </button>
      </div>
    </form>
  );
}
