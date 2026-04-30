import apiClient from './api';

export const usersService = {
  // Barcha usersni olish
  getAllUsers: async (params = {}) => {
    try {
      const response = await apiClient.get('/users', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // User bo'yicha qidirish
  searchUsers: async (query) => {
    try {
      const response = await apiClient.get('/users', { params: { search: query } });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Foydalanuvchini yangilash
  updateUser: async (userId, userData) => {
    try {
      const response = await apiClient.patch(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Foydalanuvchini o'chirish
  deleteUser: async (userId) => {
    try {
      const response = await apiClient.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Foydalanuvchining ruxsatlarini yangilash
  updateUserRole: async (userId, role) => {
    try {
      const response = await apiClient.patch(`/users/${userId}`, { role });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
