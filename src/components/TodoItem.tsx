import type { Todo } from "@/types/todo";

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
};

export function TodoItem({ todo, onDelete }: TodoItemProps) {
  return (
    <div className="group relative flex items-center gap-4 rounded-2xl bg-gradient-to-r from-slate-800/80 to-slate-800/40 p-4 backdrop-blur-sm transition-all duration-300 hover:from-slate-700/80 hover:to-slate-700/40 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
        {todo.title.charAt(0).toUpperCase()}
      </div>
      <p className="flex-1 text-lg font-medium text-slate-100 transition-colors group-hover:text-white">
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

