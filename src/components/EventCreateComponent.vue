<script lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export default {
  methods: {
    faXTwitter() {
      return faXTwitter
    },
    faFacebook() {
      return faFacebook
    },
    faInstagram() {
      return faInstagram
    },
  },
  components: {
    FontAwesomeIcon,
  },
};

</script>

<template>
  <div class="container">
    <div class="mt-5 mb-10 pb-10">

      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul class="flex flex-wrap justify-around -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Planning</button>
          </li>
          <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">Collaboration</button>
          </li>
        </ul>
      </div>
      <div class="">
        <hr class="bg_line_dark">
        <div class="flex items-center">

          <button type="button" data-modal-target="timepicker-modal" data-modal-toggle="timepicker-modal" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
            <svg class="w4 h-4 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clip-rule="evenodd"/>
            </svg>
            Schedule appointment
          </button>

          <!-- Main modal -->
          <div id="timepicker-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-[23rem] max-h-full">
              <!-- Modal content -->
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Schedule an appointment
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="timepicker-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="p-4 pt-0">
                  <div inline-datepicker datepicker-autoselect-today class="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"></div>
                  <label class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                    Pick your time
                  </label>
                  <ul id="timetable" class="grid w-full grid-cols-3 gap-2 mb-5">
                    <li>
                      <input type="radio" id="10-am" value="" class="hidden peer" name="timetable">
                      <label for="10-am"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        10:00 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="10-30-am" value="" class="hidden peer" name="timetable">
                      <label for="10-30-am"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        10:30 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="11-am" value="" class="hidden peer" name="timetable">
                      <label for="11-am"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        11:00 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="11-30-am" value="" class="hidden peer" name="timetable">
                      <label for="11-30-am"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        11:30 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="12-am" value="" class="hidden peer" name="timetable" checked>
                      <label for="12-am"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        12:00 AM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="12-30-pm" value="" class="hidden peer" name="timetable">
                      <label for="12-30-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        12:30 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="1-pm" value="" class="hidden peer" name="timetable">
                      <label for="1-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        01:00 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="1-30-pm" value="" class="hidden peer" name="timetable">
                      <label for="1-30-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        01:30 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="2-pm" value="" class="hidden peer" name="timetable">
                      <label for="2-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        02:00 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="2-30-pm" value="" class="hidden peer" name="timetable">
                      <label for="2-30-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        02:30 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="3-pm" value="" class="hidden peer" name="timetable">
                      <label for="3-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        03:00 PM
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="3-30-pm" value="" class="hidden peer" name="timetable">
                      <label for="3-30-pm"
                             class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900">
                        03:30 PM
                      </label>
                    </li>
                  </ul>
                  <div class="grid grid-cols-2 gap-2">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                    <button type="button" data-modal-hide="timepicker-modal" class="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Discard</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <hr class="bg_line_dark">
      </div>


      <div id="default-tab-content">
        <div class="hidden p-4 rounded-lg " id="profile" role="tabpanel" aria-labelledby="profile-tab">

          <div class="container_pageAdminPlanning">
            <div class="div_Place">
              <hr>
              <div class="">
                <form action="">
                  <input class="input_SearchPlace" type="text" placeholder="place ...">
                  <button class="btn btn_primary justify-center" type="submit">Search</button>
                </form>
              </div>

              <div class="container_card_placeAdmin">

                <div class="card_placeAdmin">
                  <h3>bar machin truc</h3>
                  <p>181 avenue jean jaurès, Lyon 69007, France</p>
                  <p>50 places disponnible</p>
                </div>

              </div>
            </div>

            <div class="">
              <button class="btn btn_primary">Create Event</button>
            </div>

            <div class="div_Artist">
              <hr>
              <div class="">
                <form action="">
                  <input class="input_SearchArtist" type="text" placeholder="Artist ...">
                  <button class="btn btn_primary justify-center" type="submit">Search</button>
                </form>
              </div>

              <div class="container_card_placeArtist">

                <div class="card_artistAdmin">
                  <h3>Jeremy Ferrari</h3>
                  <div class="container_reseaux">
                    <font-awesome-icon class="ms-3" :icon="faInstagram()" />
                    <font-awesome-icon class="ms-3" :icon="faFacebook()" />
                    <font-awesome-icon class="ms-3" :icon="faXTwitter()" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="hidden p-4 rounded-lg" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
          <p>hola tabs 2</p>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>

.container_pageAdminPlanning {
  display: flex;
  justify-content: space-between;
}

.div_Place, .div_Artist {
  height: 100%;
  width: 33%;
  border-right: 1px solid var(--black);
}
.div_Artist {
  border-left: 1px solid var(--black);
}

.input_SearchArtist, .input_SearchPlace {
  text-align: center;
  background-color: transparent;
  margin: 1em 0;
  width: 100%;
  padding: 1em;
  border: none;
  border-bottom: 1px solid var(--black);
}

.input_SearchArtist:focus, .input_SearchPlace:focus {
  outline: none;
  border-bottom: 1px solid black;
  box-shadow: none;
}

.container_card_placeAdmin, .container_card_placeArtist {
  padding: 1em;
  color: var(--white);
  gap: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card_placeAdmin, .card_artistAdmin {
  padding: 1em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: start;
  border-radius: 10px;
  background-color: var(--primary);
}

.card_placeAdmin {
  flex-direction: column;
  align-items: start;
}

.container_reseaux {
  font-size: 1.5em;
  display: flex;
  gap: .3em;
}

</style>