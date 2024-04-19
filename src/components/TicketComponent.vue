<script lang="ts">

</script>

<template>
  <div class="container mb-30 pb-20">
    <div class="">
      <h1 class="">Perroquet bourré</h1>
      <a href="/tickets">return</a>
    </div>

    <div class="flex mt-10">
      <div class="container_content-InfosTicket">
        <h3>12.30$</h3>
        <h2 class="text-start title_infoQrCode fw">Give this QR to event’s organizer</h2>
      </div>
      <div class="qrCode-img">
        <img src="@/assets/Qrcode_wikipedia_fr_v2clean.png" alt="qrcode_wikipedia_fr_v2clean" />
      </div>
    </div>

    <div class="mt-10">
      <p>3 seat still available</p>
      <p>Don’t you want to invite someone ?</p>
    </div>

    <div class="">
      <form action="">
        <input class="input_mailTicketShare" type="email" placeholder="exemple@mail.com">
        <button class="btn btn_primary justify-center" type="submit">Send</button>
      </form>
    </div>

    <div class="container_listeInvitesTicket">
      <ul>
        <li><a class="artistShowInTicket" href=""><span class="fw">01</span><span>Pierre lacroix</span><span>13 min</span></a></li>
        <li><a class="artistShowInTicket" href=""><span class="fw">02</span><span>Jean Dujardin</span><span>15 min</span></a></li>
        <li><a class="artistShowInTicket" href=""><span class="fw">03</span><span>Paul Paulo</span><span>18 min</span></a></li>
        <li><a class="artistShowInTicket" href=""><span class="fw">04</span><span>Eric Tamis</span><span>14 min</span></a></li>
      </ul>
    </div>
    <!-- Modal toggle -->
    <button data-modal-target="static-modal" data-modal-toggle="static-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn btn_primary mt-5 mb-5 justify-center" type="button">
      Cancelation
    </button>

    <!-- Main modal -->
    <div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">do you really want to cancel ?</p>
          </div>
          <!-- Modal footer -->
          <div class="flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button data-modal-hide="static-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Yes</button>
            <button data-modal-hide="static-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No</button>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<style scoped>

.artistShowInTicket {
  width: 100%;
  margin: 1em 0;
  padding: .5em 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--black);
}

.input_mailTicketShare {
  background-color: transparent;
  margin: 1em 0;
  width: 100%;
  padding: 1em;
  border: none;
  border-bottom: 1px solid var(--black);
}

.input_mailTicketShare:focus{
  outline: none;
  border-bottom: 1px solid black;
  box-shadow: none;
}

.container_content-InfosTicket {
  width: 50%;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
}

.title_infoQrCode {
  font-size: 28px;
}
.qrCode-img{
  width: 40%;
}
</style>

