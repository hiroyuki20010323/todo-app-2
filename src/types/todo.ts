export type Todo = {
  id: string;
  title: string;
  is_done: boolean;
  created_at: string;
  updated_at: string;
};

export type CreateTodoInput = {
  title: string;
};

export type UpdateTodoInput = {
  title?: string;
  is_done?: boolean;
};
