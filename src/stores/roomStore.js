import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoomStore = defineStore('room-store', () => {
    const duration = ref('');
     const roomName = ref('my_room')
     const roomUrl = ref('')
     
     const setDuration = (d) => {
        duration.value = d;
     }
     const setRoomName = (r) => {
        roomName.value = r;
     }

     const setRoomUrl = (rurl) => {
        roomUrl.value = rurl;
     }

    function roomInfo() {
        console.log(`Room Info: ${roomName}`);
        
    }
    return {duration, setDuration, roomInfo, setRoomName, setRoomUrl, roomName, roomUrl}
})