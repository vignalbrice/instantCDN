<template>
  <div class="home">
    <div class="py-12 bg-gray">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
        <div class="lg:text-center">
          <p
            class="text-4xl leading-6 text-indigo-600 font-semibold tracking-wide uppercase mb-3"
          >
            The best way to get a cdn faster.
          </p>
          <h3
            class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
          >
            Click and paste your CDN Online !
          </h3>
          <div
            class="w-full max-w-lg flex justify-center ml-auto mr-auto mt-5 mb-1"
          >
            <input
              class="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Search a library.."
              @input="search"
              v-model="text"
            />
            <div
              class="btn flex justify-center items-center text-center cursor-pointer"
              @click="resetSearch"
              v-if="text.length > 0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div
              class="btn flex justify-center items-center text-center cursor-pointer"
              v-else
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <p class="mt-4" v-if="text.length == 0">
            More than <b class="">{{ totalResults }}</b> libraries found.
          </p>
          <p v-else>
            <b class="">{{
              fullResults.length > 0 ? fullResults.length : results.length
            }}</b>
            libraries found in 1ms.
          </p>
        </div>

        <div>
          <div
            class="grid md:grid-cols-1 sm:my-5 lg:grid-cols-2 mt-5 md:flex-col sm:mt-8 sm:flex-col lg:flex lg:flex-row lg:justify-around lg:items-center"
          >
            <div
              class="lg:w-96 md:w-full lg:max-w-md md:mb-4 rounded-lg px-10 h-40 flex justify-center items-center overflow-hidden shadow-lg cursor-pointer transition duration-100 transform hover:scale-90"
            >
              <div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="mx-auto flex items-center justify-center md:h-12 md:w-12 rounded-md bg-teal-500 text-white"
                    >
                      <!-- Heroicon name: globe-alt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 md:text-left text-center">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Search or select your CDN
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Search into our search engine and select
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="lg:w-96 md:w-full lg:max-w-md rounded-lg p-10 h-40 flex justify-center items-center overflow-hidden shadow-lg cursor-pointer transition duration-100 transform hover:scale-90"
            >
              <div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="mx-auto flex items-center justify-center md:h-12 md:w-12 rounded-md bg-teal-500 text-white"
                    >
                      <!-- Heroicon name: globe-alt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4 md:text-left text-center">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Copy & paste into your web application
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      Copy and paste the link and code !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="my-5 sm:grid md:grid-cols-2 xl:grid-cols-3 flex-wrap justify-center items-center"
        >
          <div
            class="max-w-xl h-64 rounded-lg px-10 py-10 mx-4 my-4 overflow-hidden shadow-lg hover:shadow-xl"
            v-for="(result, idx) in results"
            :key="idx"
          >
            <div class="flex justify-between">
              <div class="flex">
                <div class="font-medium text-left text-xl mr-2 text-bold">
                  {{ result.name }}
                </div>
                <small class="mr-1">@{{ result.version }}</small>
                <a
                  :href="result.latest"
                  target="_blank"
                  class="flex items-start link"
                  ref="mylink"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    /></svg
                ></a>
              </div>
              <div class="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <div class="font-semibold">
                  {{
                    result.github.stargazers_count !== null
                      ? truncateString(result.github.stargazers_count)
                      : 0
                  }}
                </div>
              </div>
            </div>
            <p class="text-left mt-3 overflow-ellipsis overflow-hidden h-12">
              {{ result.description }}...
            </p>
            <div class="my-12 flex items-center">
              <div
                class="cursor-pointer text-left h-6 w-6 mt-1 tranform hover:scale-50"
                @mouseenter="showLinkByIndex = idx"
                @mouseleave="showLinkByIndex = null"
                v-clipboard:copy="result.latest"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="relative">
                  <div
                    class="absolute left-1 -bottom-17 z-10 w-24 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-gray-800 rounded-lg shadow-lg text-center"
                    v-show="showLinkByIndex === idx"
                  >
                    Copy URL
                    <svg
                      class="absolute z-10 w-6 h-6 text-gray-800 transform translate-x-6 -translate-y-8 fill-current stroke-current"
                      width="8"
                      height="8"
                    >
                      <rect
                        x="12"
                        y="-10"
                        width="8"
                        height="8"
                        transform="rotate(45)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                class="cursor-pointer text-left h-6 w-6"
                @mouseenter="showCodeByIndex = idx"
                @mouseleave="showCodeByIndex = null"
                v-clipboard:copy="
                  `<script src='${result.latest}' referrerpolicy='no-referrer'></script>`
                "
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <div class="relative">
                  <div
                    class="absolute left-1 -bottom-17 z-10 w-24 p-2 -mt-1 text-sm leading-tight text-white transform -translate-x-1/2 -translate-y-full bg-gray-800 rounded-lg shadow-lg text-center"
                    v-show="showCodeByIndex === idx"
                  >
                    Copy Script
                    <svg
                      class="absolute z-10 w-6 h-6 text-gray-800 transform translate-x-6 -translate-y-8 fill-current stroke-current"
                      width="8"
                      height="8"
                    >
                      <rect
                        x="12"
                        y="-10"
                        width="8"
                        height="8"
                        transform="rotate(45)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="transform left-64 center-absolute-content w-2/6 top-3 fixed bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md flex items-center justify-center flex-col"
          role="alert"
          v-if="showAlert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
                />
              </svg>
            </div>
            <div>
              <p class="font-bold">Copied !</p>
              <p class="text-sm font-medium">
                {{ alertContent }}
              </p>
            </div>
          </div>
        </div>
        <button
          v-if="results.length > 0 && fullResults.length > items"
          class="w-64 bg-indigo-600 bg-gradient-to-tl text-white font-semibold rounded-sm h-10"
          @click="loadMoreResults"
        >
          Show more results
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {},
  data () {
    return {
      text: "",
      completeResults: [],
      fullResults: [],
      initResults: [],
      results: [],
      clipboard: null,
      totalResults: null,
      totalSearchedResults: null,
      timer: 0,
      itemsPerPages: 9,
      items: 0,
      showLinkByIndex: null,
      showCodeByIndex: null,
      showAlert: false,
      alertContent: ""
    }
  },
  created () {
    // Fetch CDN from API
    fetch("https://api.cdnjs.com/libraries?fields=filename,description,version,github,version")
      .then(response => response.json())
      .then(data => {
        this.totalResults = data.results.length
        this.fullResults = data.results
        this.completeResults = data.results
        this.initResults = data.results.splice(0, this.itemsPerPages)
        this.results = data.results.splice(0, this.itemsPerPages)
      })
  },
  updated () {
    console.log(this.items)
  },
  methods: {
    search (e) {
      const value = e.target.value
      this.text = value
      clearTimeout(this.timer)
      if (this.text.length > 0) {
        this.timer = setTimeout(() => {
          fetch(`https://api.cdnjs.com/libraries?search=${this.text}&search_fields=name&fields=filename,description,version,github,version`)
            .then(responses => responses.json())
            .then(data => {
              this.fullResults = data.results
              this.totalSearchedResults = data.results.length
              this.results = data.results.splice(0, this.itemsPerPages)
            })
        }, 100)
      } else {
        this.results = this.initResults
      }
    },
    loadMoreResults () {
      this.results = [...this.results, ...this.fullResults.splice(this.itemsPerPages, this.itemsPerPages * 2)]
      this.items = this.itemsPerPages * 2
    },
    onSearch (e) {
      this.text = e.target.value
    },
    resetSearch () {
      this.text = ""
      this.results = this.initResults
      this.fullResults = this.completeResults
    },
    truncateString (num) {
      return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    },
    onCopy (e) {
      // alert('You just copied the following text to the clipboard: ' + e.text)
      this.alertContent = e.text
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 1000)
    },
    onError (e) {
      alert('Failed to copy the text to the clipboard')
      console.log(e);
    }
  }
};
</script>
