// app/tasks/new/page.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTask } from '../../api/taskService';

export default function CreateTaskPage() {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createTask({ title, description, isCompleted });
    router.push('/tasks');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-md text-black mt-16">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 rounded border"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-1">Status</label>
        <select value={isCompleted.toString()} onChange={(e) => setIsCompleted(e.target.value === 'true')}>
          <option value="false">Pending</option>
          <option value="true">Completed</option>
        </select>
      </div>
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}
