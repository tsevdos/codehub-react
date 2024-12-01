import { NextRequest, NextResponse } from "next/server";
import { getTodos, addTodo } from "@/lib/todosStore";

export async function GET() {
  const todos = getTodos();

  return NextResponse.json(todos);
}

export async function POST(req: NextRequest) {
  const { task } = await req.json();

  if (!task) {
    return NextResponse.json({ error: "Task is required" }, { status: 400 });
  }

  const newTodo = addTodo(task);
  return NextResponse.json(newTodo, { status: 201 });
}
