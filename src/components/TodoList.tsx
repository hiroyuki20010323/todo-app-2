import type { Todo } from "@/types/todo";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
};

export function TodoList({ todos, onDelete }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 text-6xl opacity-30">📝</div>
        <p className="text-xl text-slate-400">TODOがありません</p>
        <p className="mt-2 text-sm text-slate-500">
          上のフォームから新しいTODOを追加してください
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          className="animate-fadeIn"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <TodoItem todo={todo} onDelete={onDelete} />
        </div>
      ))}
    </div>
  );
}

