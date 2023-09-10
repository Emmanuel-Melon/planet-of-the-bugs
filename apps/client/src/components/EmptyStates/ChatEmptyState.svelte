<script>
  import Image from "./Image.jpg"
</script>

<main>
  <div class="container">
    <img  class="resize" src={Image} alt="Man using magnet to collect mail" />
    <h1>No new messages.</h1>
    <p>There are no new messages. Start chatting with your fellow BUGSLAYERS!</p>
    <button class="btn btn-wide">New Chat</button>
  </div>
</main>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 750px;
    height: 600px;
    margin-top: 10px;
  }

  h1 {
    font-weight: bolder;
    font-size: large;
  }

  img {
    width: 700px;
    height: 450px;
  }

  .btn {
    margin-top: 25px;
    margin-bottom: 5px;
  } 
</style>