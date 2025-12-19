import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { UpdateTodoInput } from "@/types/todo";

type RouteParams = {
  params: Promise<{ id: string }>;
};

// PUT: Todoを更新
export async function PUT(request: Request, { params }: RouteParams) {
  const { id } = await params;
  const body: UpdateTodoInput = await request.json();

  const updateData: UpdateTodoInput = {};
  if (body.title !== undefined) {
    updateData.title = body.title.trim();
  }
  if (body.is_done !== undefined) {
    updateData.is_done = body.is_done;
  }

  if (Object.keys(updateData).length === 0) {
    return NextResponse.json(
      { error: "更新するフィールドがありません" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("todos")
    .update({ ...updateData, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json(
      { error: "Todoが見つかりません" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}

// DELETE: Todoを削除
export async function DELETE(_request: Request, { params }: RouteParams) {
  const { id } = await params;

  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

