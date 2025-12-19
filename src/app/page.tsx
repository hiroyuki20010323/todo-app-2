"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoInput } from "@/components/TodoInput";
import { TodoList } from "@/components/TodoList";
import { Card } from "@/components/Card";

export default function Home() {
  const { todos, isLoading, error, addTodo, deleteTodo, toggleTodo } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-2xl px-4 py-12">
        <header className="mb-12 text-center">
          <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            TODO
          </h1>
          <p className="mt-3 text-lg text-slate-400">
            タスクを管理してシンプルに
          </p>
        </header>

        <main className="space-y-8">
          <Card>
            <TodoInput onAdd={addTodo} />
          </Card>

          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-200">
                タスク一覧
              </h2>
              {todos.length > 0 && (
                <span className="rounded-full bg-indigo-500/20 px-3 py-1 text-sm font-medium text-indigo-300">
                  {todos.length} 件
                </span>
              )}
            </div>

            {error && (
              <div className="mb-4 rounded-lg bg-red-500/10 p-4 text-red-400">
                {error}
              </div>
            )}

            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500/30 border-t-indigo-500" />
                <p className="mt-4 text-slate-400">読み込み中...</p>
              </div>
            ) : (
              <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
            )}
          </Card>
        </main>
      </div>
    </div>
  );
}
