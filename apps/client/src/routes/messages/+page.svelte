<script>
  import "iconify-icon";
  import ChatList from "$components/Chat/ChatList.svelte";
  import Conversation from "$components/Chat/Conversation.svelte";
  import ConversationMenu from "$components/Chat/ConversationMenu.svelte";
  import ChatInput from "$components/Chat/ChatInput.svelte";
  import NewConversationModal from "$components/Modals/NewConversationModal.svelte";
  export let activeConversation = 1;
  const imageURL =
    "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/29/1500370357-1.jpg?crop=0.5625xw:1xh;center,top&resize=1200:*";

  const muzanURL =
    "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg";
  const tengenURL =
    "https://rare-gallery.com/thumbnail/1375991-tengen-uzui-sound-hashira-demon-slayer-anime-kimetsu-no-yaiba.jpg";

  const chats = [
    {
      id: 1,
      name: "Gyomei Himejima",
      avatar:
        "https://staticg.sportskeeda.com/editor/2021/12/d8fd2-16407278993535-1920.jpg",
      text: "We are proud to live and die as human beings.",
      active: false,
    },
    {
      id: 2,
      name: "😈 Muzan Kibutsuji",
      avatar:
        "https://m.media-amazon.com/images/M/MV5BMzcyZjYxYzktMWZhMi00ZGFkLTllMTEtNjJjZjU4ODdlYzRmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
      text: "Prepare to witness the true terror of the Demong King!",
      active: true,
    },
    {
      id: 3,
      name: "Ryuk",
      avatar:
        "https://cdn.europosters.eu/image/750/canvas-print-death-note-ryuk-checkered-i147611.jpg",
      text: "Hahahahaha",
      active: false,
    },
    {
      id: 4,
      name: "Ban",
      avatar: "https://practicaltyping.com/wp-content/uploads/2020/11/ban.jpg",
      text: "Even Though My Life hasn’t been all that great, I figure that if I Live Long Enough, Something good Might Happen.",
      active: false,
    },
    {
      id: 5,
      name: "Nezuko",
      avatar:
        "https://staticg.sportskeeda.com/editor/2022/02/40498-16437334600644-1920.jpg",
      text: "Hmmmmm, hmmm",
      active: false,
    },
  ];
</script>

<section class="mx-auto h-full">
  <div class="flex w-full h-full">
    <div class="basis-2/5 border-r-2">
      <div
        class="flex justify-between items-center p-2 bg-base-300"
      >
        <div>
          <h3>My Conversations</h3>
        </div>
        <NewConversationModal />
      </div>
      <ChatList {chats} />
    </div>
    <div class="flex basis-3/5 items-center">
      <div class="">
        <ConversationMenu />
        <Conversation />
        <ChatInput />
      </div>
    </div>
  </div>
</section>
