import apiClient from './api';

export const lessonsService = {
  // Barcha darslarni olish
  getAllLessons: async (params = {}) => {
    try {
      const response = await apiClient.get('/lessons', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Darsni ID bo'yicha olish
  getLessonById: async (lessonId) => {
    try {
      const response = await apiClient.get(`/lessons/${lessonId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Yangi dars yaratish
  createLesson: async (lessonData) => {
    try {
      const response = await apiClient.post('/lessons', lessonData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Darsni yangilash
  updateLesson: async (lessonId, lessonData) => {
    try {
      const response = await apiClient.patch(`/lessons/${lessonId}`, lessonData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Darsni o'chirish
  deleteLesson: async (lessonId) => {
    try {
      const response = await apiClient.delete(`/lessons/${lessonId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Guruhning darslarini olish
  getGroupLessons: async (groupId, params = {}) => {
    try {
      const response = await apiClient.get(`/lessons/group/${groupId}`, { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
