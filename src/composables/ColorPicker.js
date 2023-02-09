import { ref } from "vue"; 
export function useRandomColorPicker() { 
    const colors = ref(["green", "red", "blue", "purple"]);
      let message = ref("pick a color..."); 
      const matchColor = (value) => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        if (colors.value[randomNumber] === value) {
            message.value = `You win... [answer: ${colors.value[randomNumber]}]`;
            return;
        }
        message.value = `You lose [answer: ${colors.value[randomNumber]}]`;
      };
      return { colors, message, matchColor };
    }

    