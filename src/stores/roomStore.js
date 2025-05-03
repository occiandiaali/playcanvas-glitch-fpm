import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoomStore = defineStore('room-store', () => {
    const duration = ref('');
     const roomName = ref('my_room')
     
     const setDuration = (d) => {
        duration.value = d;
     }

    function roomInfo() {
        console.log(`Room Info: ${roomName}`);
        
    }
    return {duration, setDuration, roomInfo}
})