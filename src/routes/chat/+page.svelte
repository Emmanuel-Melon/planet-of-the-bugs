<script>
  import "iconify-icon";
  const imageURL =
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/29/1500370357-1.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*";


    const muzanURL = "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg";
    const tengenURL = "https://rare-gallery.com/thumbnail/1375991-tengen-uzui-sound-hashira-demon-slayer-anime-kimetsu-no-yaiba.jpg";

    const chats = [
      {
        id: 1,
        name: "Gyomei Himejima",
        avatar: "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
        text: "We are proud to live and die as human beings."
      },
      {
        id: 2,
        name: "Muzan Kibutsuji",
        avatar: "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        text: "Prepare to witness the true terror of the Demong King!"
      },
      {
        id: 3,
        name: "Ryuk",
        avatar: "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
        text: "Hahahahaha"
      }
    ]
</script>

<section class="bg-white w-4/5 mx-auto border-2 border-gray-100">
  <div class="flex p-4 border-2 border-gray-200">
    <div>
      <h1 class="flex items-center gap-2">
        <iconify-icon
          icon="heroicons:chat-bubble-bottom-center-text-20-solid"
        />
        Chat
      </h1>
    </div>
  </div>
  <div class="flex w-full">
    <div class="basis-1/4 border-2 border-gray-100 bg-gray-100">
      <div>
        {#each chats as chat}
        <div class="flex items-center gap-2 mb-1 hover:bg-gray-200 cursor-pointer bg-white p-2 ">
          <div class="avatar">
            <div class="w-10 rounded-full ring ring-black ring-offset-base-100 ring-offset-1">
              <img src={chat.avatar} alt={chat.name} />
            </div>
          </div>
          <div>
            <h4>{chat.name}</h4>
            <p>{chat.text}</p>
          </div>
        </div>
      {/each}
      </div>
    </div>
    <div class="flex basis-3/4 items-center">
      <div class=" grow">
        <div class="p-2">
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={muzanURL} alt="deadpool" />
              </div>
            </div>
            <div class="chat-bubble">
              Ah, the Sound Hashira. It seems we have finally crossed paths. Quite flashy!
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={tengenURL} alt="deadpool" />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-secondary">
              Muzan Kibutsuji, your reign of terror ends here.
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={muzanURL} alt="deadpool" />
              </div>
            </div>
            <div class="chat-bubble">Your resistance is futile. I will crush you and all the Demon Slayers who dare oppose me.</div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={tengenURL} alt="deadpool" />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-secondary">
              Your empty threats won't intimidate me, Muzan.
            </div>
          </div>
          <div class="chat chat-end">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={tengenURL} alt="deadpool" />
              </div>
            </div>
            <div class="chat-bubble chat-bubble-secondary">
              Your arrogance blinds you, Muzan. We fight for a cause greater than ourselves, a cause that protects humanity from the darkness you embody. Your
            </div>
          </div>
          <div class="chat chat-start">
            <div class="chat-image avatar">
              <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img src={muzanURL} alt="deadpool" />
              </div>
            </div>
            <div class="chat-bubble">Prepare to witness the true terror of the Demong King!</div>
          </div>
        </div>
        <div class="flex justify-between gap-2 items-center mt-4 p-2">
          <textarea placeholder="Type your message here..." class="textarea px-4 textarea-bordered textarea-xs w-full" ></textarea>
          <button class="btn btn-md btn-accent flex items-center gap-2">        <iconify-icon
            icon="heroicons:chat-bubble-bottom-center-text-20-solid"
          /> Send</button>
        </div>
      </div>
    </div>
  </div>
</section>
