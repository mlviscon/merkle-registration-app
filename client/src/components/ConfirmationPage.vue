<template>
  <div class="confirmation-page">
    <div class="info-container">
      <div class="header">
          User Registered!
      </div>
      <div class="return-button" @click="$router.push('/')">
          return to home screen
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "confirmationPage",
    data () {
        return{

        }
    },
}
</script>

<style>
  .info-container {
    width: 50%;
    margin: auto;
    margin-top: 50px;
    text-align: center;
  }
  .header {
    font-size: 34px;
  }

  .return-button {
    color: white;
    background-color: blue;
    line-height: 80px;
    height: 80px;
    max-width: 200px;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
  }

  .return-button:hover {
    cursor: pointer;
  }

  .return-button:active {
    transform: scale(0.98);
    /* Scaling button to 0.98 to its original size */
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
    /* Lowering the shadow */
  }
</style>