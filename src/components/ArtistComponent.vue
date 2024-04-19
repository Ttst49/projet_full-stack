<script lang="ts">

</script>

<template>
  <div class="flex justify-center">
    <h1 class="h1-css">Artists</h1>
  </div>
  <input class="searchBar" placeholder="Search..." type="search" name="artistSearch" >
  <div class="card">
    <div class="left">
      <img src="" alt="">
    </div>

      <div class="right">
        <a href="/artist/show">
        <span class="artistName">Jeremey Ferrrrary</span>
        </a>
        <div class="info">
          <span class="entries">28 part.</span>
          <span class="date">01/04/24</span>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .h1-css{
    font-size: 2.5rem;
    margin: 1.5em;
    color: #252525;
  }

  .searchBar{
    width: 90%;
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid black;
    outline: none;
  }

  .searchBar:focus{
    outline: none;
    border-bottom: 1px solid black;
    box-shadow: none;
  }

  .card{
    margin-left: 5%;
    margin-top: 10%;
    width: 90%;
    height: 7vh;
    background-color: #6E7DAB;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
  }

  .left{
    width: 20%;
    background-color: black;
    height: 100%;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
  }

  .right{
    color: white;
    display: flex;
    justify-content: space-between;
    width: 75%;
  }

  .artistName{
    margin: 5px;
  }

  .info{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
</style>
