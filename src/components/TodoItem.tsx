import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
};

export function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
  return (
    <div className="group relative flex items-center gap-4 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-800/40 p-4 backdrop-blur-sm transition-all duration-300 hover:from-slate-700/80 hover:to-slate-700/40 hover:shadow-lg hover:shadow-indigo-500/10">
      <label className="relative flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={todo.is_done}
          onChange={() => onToggle(todo.id)}
          className="peer sr-only"
          aria-label={todo.is_done ? "未完了に戻す" : "完了にする"}
        />
        <div
          className={`flex h-6 w-6 items-center justify-center rounded-md border-2 transition-all duration-300 ${
            todo.is_done
              ? "border-emerald-500 bg-emerald-500 shadow-lg shadow-emerald-500/30"
              : "border-slate-500 bg-transparent hover:border-indigo-400"
          }`}
        >
          {todo.is_done && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-4 w-4 text-white"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          )}
        </div>
      </label>
      <p
        className={`flex-1 text-lg font-medium transition-all duration-300 ${
          todo.is_done
            ? "text-slate-500 line-through"
            : "text-slate-100 group-hover:text-white"
        }`}
      >
        {todo.title}
      </p>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400 opacity-0 transition-all duration-200 hover:bg-red-500/20 hover:text-red-300 group-hover:opacity-100"
        aria-label="削除"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
      <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-indigo-500/0 to-purple-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
    </div>
  );
}
