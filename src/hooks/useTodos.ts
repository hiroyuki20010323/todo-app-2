"use client";

import { useState, useCallback, useEffect } from "react";
import type { Todo, UpdateTodoInput } from "@/types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 初回マウント時にTodoを取得
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/todos");
      if (!response.ok) {
        throw new Error("Todoの取得に失敗しました");
      }
      const data = await response.json();
      setTodos(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = useCallback(async (title: string) => {
    try {
      setError(null);
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        throw new Error("Todoの追加に失敗しました");
      }

      const newTodo: Todo = await response.json();
      setTodos((prev) => [newTodo, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    }
  }, []);

  const updateTodo = useCallback(async (id: string, updates: UpdateTodoInput) => {
    try {
      setError(null);
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error("Todoの更新に失敗しました");
      }

      const updatedTodo: Todo = await response.json();
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    }
  }, []);

  const deleteTodo = useCallback(async (id: string) => {
    try {
      setError(null);
      const response = await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Todoの削除に失敗しました");
      }

      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    }
  }, []);

  const toggleTodo = useCallback(
    async (id: string) => {
      const todo = todos.find((t) => t.id === id);
      if (todo) {
        await updateTodo(id, { is_done: !todo.is_done });
      }
    },
    [todos, updateTodo]
  );

  return {
    todos,
    isLoading,
    error,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    refetch: fetchTodos,
  };
}

