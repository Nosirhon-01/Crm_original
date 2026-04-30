import apiClient from './api';

export const groupsService = {
  // Barcha guruhlarni olish
  getAllGroups: async (params = {}) => {
    try {
      const response = await apiClient.get('/groups', { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Guruhni ID bo'yicha olish
  getGroupById: async (groupId) => {
    try {
      const response = await apiClient.get(`/groups/${groupId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Yangi guruh yaratish
  createGroup: async (groupData) => {
    try {
      const response = await apiClient.post('/groups', groupData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Guruhni yangilash
  updateGroup: async (groupId, groupData) => {
    try {
      const response = await apiClient.patch(`/groups/${groupId}`, groupData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Guruhni o'chirish
  deleteGroup: async (groupId) => {
    try {
      const response = await apiClient.delete(`/groups/${groupId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Guruhga talaba qo'shish
  addStudentToGroup: async (groupId, studentId) => {
    try {
      const response = await apiClient.post(`/groups/${groupId}/students`, { studentId });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Guruhdan talabani olib tashlash
  removeStudentFromGroup: async (groupId, studentId) => {
    try {
      const response = await apiClient.delete(`/groups/${groupId}/students/${studentId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};
