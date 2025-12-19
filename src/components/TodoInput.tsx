"use client";

import { useState } from "react";

type TodoInputProps = {
  onAdd: (title: string) => void;
};
// コメント
export function TodoInput({ onAdd }: TodoInputProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (trimmedTitle) {
      onAdd(trimmedTitle);
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <div className="relative flex-1">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいTODOを入力..."
          className="w-full rounded-xl border-0 bg-slate-800/60 px-5 py-4 text-lg text-white placeholder-slate-400 ring-2 ring-slate-700 transition-all duration-300 focus:bg-slate-800 focus:outline-none focus:ring-indigo-500"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-300" />
      </div>
      <button
        type="submit"
        disabled={!title.trim()}
        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none"
      >
        <span className="relative z-10">追加</span>
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
    </form>
  );
}


