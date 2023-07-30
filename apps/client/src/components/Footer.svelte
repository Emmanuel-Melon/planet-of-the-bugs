<script lang="ts">
  import "iconify-icon";
  import InviteFriendModal from "./Modals/InviteFriendModal.svelte";
  type LinkTarget = "_blank" | "_self" | null;
  type FooterLink = {
    id: number;
    name: string;
    url: string;
    target: LinkTarget;
    icon?: string;
  };

  const footerLinks: Array<FooterLink> = [
    {
      id: 1,
      name: "Support",
      url: "https://support.planetofthebugs.xyz",
      icon: "ri:customer-service-2-line",
      target: "_blank",
    },
    {
      id: 2,
      name: "Docs",
      url: "https://docs.planetofthebugs.xyz",
      icon: "ri:article-line",
      target: "_blank",
    }
  ];
</script>

<footer class="flex items-center justify-center p-4 bg-base-200">
  <div class="flex gap-4">
    {#each footerLinks as link}
      <a
        class="link link-hover flex items-center gap-2"
        target={link.target || "_self"}
        href={link.url}><iconify-icon icon={link.icon} />{link.name}</a
      >
    {/each}
    <InviteFriendModal />
  </div>
</footer>
