import { defineStore } from 'pinia'
import { contacts } from '@/data/contactsData'
export const useChatStore = defineStore('chatStore', {

    state: () => ({
        contacts,
    }),

    getters: {

    },
    actions: {

    },

})
