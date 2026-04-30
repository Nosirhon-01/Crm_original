import apiClient from './api';

export const studentsService = {
  // Barcha talabalirni olish
  getAllStudents: async (params = {}) => {
    try {
      const response = await apiClient.get('/students', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Talabani ID bo'yicha olish
  getStudentById: async (studentId) => {
    try {
      const response = await apiClient.get(`/students/${studentId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Yangi talaba yaratish
  createStudent: async (studentData) => {
    try {
      const response = await apiClient.post('/students', studentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Talabani yangilash
  updateStudent: async (studentId, studentData) => {
    try {
      const response = await apiClient.patch(`/students/${studentId}`, studentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Talabani o'chirish
  deleteStudent: async (studentId) => {
    try {
      const response = await apiClient.delete(`/students/${studentId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Talabaning to'lashlarini olish
  getStudentPayments: async (studentId) => {
    try {
      const response = await apiClient.get(`/students/${studentId}/payments`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
