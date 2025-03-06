export interface TaskType {
  id: string
  isCompleted: boolean
  createdAt: string
  description: string
  todolistId: string
  title: string
  dueDate: string
}
export interface TaskRequest {
  id: string
  is_completed: true
  created_at: string
  description: string
  todolist_id: string
  title: string
  due_date: string
}