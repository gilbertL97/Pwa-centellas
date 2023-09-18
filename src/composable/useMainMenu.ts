import { ref } from "vue";
import { useRouter } from "vue-router";
const menuOpenRef = ref(false);
const selectedRef = ref("home");

export const useMainMenu = () => {
  const router = useRouter();

  const toggleMenu = () => {
    menuOpenRef.value = !menuOpenRef.value;
  };

  const setSelected = (selected: string, closeMenu = true) => {
    selectedRef.value = selected;
    closeMenu && (menuOpenRef.value = false);
    router.replace({name:selected});
  };
  return {
    // props
    menuOpenRef,
    selectedRef,
    // methods
    toggleMenu,
    setSelected,
  };
};