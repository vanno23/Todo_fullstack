import { GetTodoData } from "./getDataTypes";

export interface TodoItemProps {
  item: GetTodoData,
  index: number,
  completeRow: (id: string, completed: boolean) => void,
  deleteTodoRow: (id: string) => void,
  editFunction: (id: string, title: string, completed: boolean) => void,
}