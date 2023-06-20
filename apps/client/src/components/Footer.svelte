<script lang="ts">
  import "iconify-icon";
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
      name: "Contact Support",
      url: "https://support.planetofthebugs.xyz",
      icon: "ri:customer-service-2-line",
      target: "_blank",
    },
    {
      id: 2,
      name: "Invite a friend",
      url: "#",
      icon: "ri:share-line",
      target: "_blank",
    },
    {
      id: 3,
      name: "Docs",
      url: "https://docs.planetofthebugs.xyz",
      icon: "ri:article-line",
      target: "_blank",
    },
    {
      id: 4,
      name: "About",
      url: "/about",
      icon: "ri:information-line",
      target: "_blank",
    },
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
  </div>
</footer>
