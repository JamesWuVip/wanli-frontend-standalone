export interface Assignment {
  id: number
  title: string
  description: string
  dueDate: string
  createdAt: string
  updatedAt: string
}

export interface Submission {
  id: number
  assignmentId: number
  studentId: number
  content: string
  fileName?: string
  fileUrl?: string
  submittedAt: string
  grade?: number
  feedback?: string
  status: 'SUBMITTED' | 'GRADED'
}

export interface SubmissionResult {
  id: number
  submission: Submission
  assignment: Assignment
  student: {
    id: number
    username: string
    email: string
  }
  grade?: number
  feedback?: string
  gradedAt?: string
  teacher?: {
    id: number
    username: string
    email: string
  }
}

export interface User {
  id: number
  username: string
  email: string
  role: 'STUDENT' | 'TEACHER' | 'ADMIN'
}
