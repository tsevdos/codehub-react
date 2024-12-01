import { NextRequest, NextResponse } from "next/server";
import { updateTodo, deleteTodo } from "@/lib/todosStore";

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const { task, completed } = await req.json();
  const updatedTodo = updateTodo(id, { task, completed });

  if (!updatedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const { task, completed } = await req.json();
  const updatedTodo = updateTodo(id, {
    ...(task !== undefined && { task }),
    ...(completed !== undefined && { completed }),
  });

  if (!updatedTodo) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const success = deleteTodo(id);

  if (!success) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Todo deleted" }, { status: 204 });
}
