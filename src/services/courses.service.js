import apiClient from './api';

export const coursesService = {
  // Barcha kurslarni olish
  getAllCourses: async (params = {}) => {
    try {
      const response = await apiClient.get('/courses', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Kursni ID bo'yicha olish
  getCourseById: async (courseId) => {
    try {
      const response = await apiClient.get(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Yangi kurs yaratish
  createCourse: async (courseData) => {
    try {
      const response = await apiClient.post('/courses', courseData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Kursni yangilash
  updateCourse: async (courseId, courseData) => {
    try {
      const response = await apiClient.patch(`/courses/${courseId}`, courseData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Kursni o'chirish
  deleteCourse: async (courseId) => {
    try {
      const response = await apiClient.delete(`/courses/${courseId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
