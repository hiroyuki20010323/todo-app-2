"use client";

import { useState, useCallback } from "react";
import type { Todo } from "@/types/todo";

export function useTodos(initialTodos: Todo[] = []) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = useCallback((title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
    };
    setTodos((prev) => [newTodo, ...prev]);
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return {
    todos,
    addTodo,
    deleteTodo,
  };
}
