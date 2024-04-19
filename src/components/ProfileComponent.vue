<script lang="ts">
import { defineComponent, ref } from 'vue';
import { GlobalConstants } from "@/Common/global-constants";
import axiosHttp from '@/auth/interceptor';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ProfileComponent',
  setup() {
    const email = ref<string>('');
    const router = useRouter();

    const onload = async () => {
      try {
        const response = await axiosHttp.get(GlobalConstants.baseUrl + `/profile/getCurrent`);
        console.log(response.data);

        email.value = response.data.content.email;
        if (!email.value) {
          router.push('/login');
        }
      } catch (error) {
        console.error("Erreur lors de la requête GET :", error);
        router.push('/login');
      }
    };

    onload();

    return { email };
  }
});
</script>

<template>
  <div class="container">
    <div class="pb-20">
      <div class="">
        <h1 class="">Profile</h1>
      </div>
      <div class="container-content_infoProfile">
        <img class="PP" src="" alt="Profile picture">
        <a href="/edit">Edit ></a>
        <p>{{ email }}</p>
      </div>

      <div class="container_content_actionProfil">
        <div class="w-[calc(100%)]">
          <h2 class="fw text-start mb-3">Purchases</h2>
          <a class="btn btn_primary btn_primary_profile" href="">means of payment</a>
        </div>

        <div class="w-[calc(100%)]">
          <h2 class="fw text-start mb-3">Settings</h2>
          <div class="container_content_listSettingsProfile">
            <a class="btn btn_primary_profile" href="">terms of use</a>
            <a class="btn btn_primary_profile" href="/sponsor">Sponsorship</a>
            <a class="btn btn_primary_profile" href="">Themes</a>
            <a class="btn btn_primary_profile" href="/venue">venue index</a>
            <a class="btn btn_primary_profile" href="">followed artist</a>
            <a class="btn btn_primary_profile" href="">Event</a>
          </div>
        </div>
        <a class="btn btn_primary" href="/logout">Logout</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 110vh;
}

.container-content_infoProfile {
  margin: 1em 0;
  gap: .3em;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.PP {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--primary);
}

.container_content_actionProfil {
  gap: 3em;
  margin-top: 5em;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
}

.container_content_listSettingsProfile {
  gap: 1em;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.btn_primary_profile {
  width: 100%;
  display: flex;
  border-radius: 10px;
  background-color: var(--secondary);
  justify-content: start;
}
</style>