
import { useStorage,StorageSerializers } from "@vueuse/core";
import { ElMessage } from "element-plus";
import { computed, ref } from "vue";

const user = useStorage<{
  name?: string;
  id?: string;
}>('user',{},undefined,{
  serializer:StorageSerializers.object
})
export const useUser = () => {
  const loginForm = ref({
    username: "",
    password: "",
  });

  const login = async () => {
    user.value.name = loginForm.value.username;
    user.value.id = "1";
    ElMessage.success('Login success')
  };
  const logout = async () => {
    user.value.name = ''
    user.value.id = "";
    ElMessage.success('Logout success')
  };
  const loggedIn = computed(() => user.value?.id);
  return {
    user,
    login,
    logout,
    loggedIn,
    loginForm
  }
}