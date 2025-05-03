import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user-store', () => {
    const username = ref('user_zZY88uB');

    function logUser() {
        console.log(`User: ${username}`);
        
    }
    return {username, logUser}
})