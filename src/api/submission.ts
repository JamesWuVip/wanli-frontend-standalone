import { apiClient } from './client'
import type { Submission, SubmissionResult } from '../types/submission'

export const submissionApi = {
  // 获取所有作业
  async getAssignments() {
    const response = await apiClient.get('/api/assignments')
    return response.data
  },

  // 提交作业
  async submitAssignment(assignmentId: number, content: string, file?: File) {
    const formData = new FormData()
    formData.append('assignmentId', assignmentId.toString())
    formData.append('content', content)
    if (file) {
      formData.append('file', file)
    }

    const response = await apiClient.post('/api/submissions', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  },

  // 获取提交结果
  async getSubmissionResult(submissionId: number): Promise<SubmissionResult> {
    const response = await apiClient.get(`/api/submissions/${submissionId}/result`)
    return response.data
  },

  // 获取学生的所有提交
  async getStudentSubmissions() {
    const response = await apiClient.get('/api/submissions/student')
    return response.data
  },

  // 教师相关API
  async getTeacherAssignments() {
    const response = await apiClient.get('/api/teacher/assignments')
    return response.data
  },

  async createAssignment(assignment: any) {
    const response = await apiClient.post('/api/teacher/assignments', assignment)
    return response.data
  },

  async getTeacherSubmissions() {
    const response = await apiClient.get('/api/teacher/submissions')
    return response.data
  },

  async gradeSubmission(submissionId: number, grade: number, feedback: string) {
    const response = await apiClient.post(`/api/teacher/submissions/${submissionId}/grade`, {
      grade,
      feedback
    })
    return response.data
  }
}
