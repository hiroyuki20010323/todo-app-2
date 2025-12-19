import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import type { CreateTodoInput } from "@/types/todo";

// GET: 全てのTodoを取得
export async function GET() {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST: 新しいTodoを作成
export async function POST(request: Request) {
  const body: CreateTodoInput = await request.json();

  if (!body.title || body.title.trim() === "") {
    return NextResponse.json(
      { error: "タイトルは必須です" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("todos")
    .insert({ title: body.title.trim() })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

