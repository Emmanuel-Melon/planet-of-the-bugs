<script lang="ts">
  import "iconify-icon";
  import {selectedItem} from './store'
  import ProfileSettings from "$components/Settings/ProfileSettings.svelte";
  import NotificationsSettings from "$components/Settings/NotificationsSettings.svelte";
  import AccountSettings from "$components/Settings/AccountSettings.svelte";
  import PrivacyAndSecuritySettings from "$components/Settings/PrivacyAndSecuritySettings.svelte";

  let currentItem: number;

  selectedItem.subscribe(value => {
    currentItem = value - 1;
  });

  const items = [
    { value: 1, component: ProfileSettings },
    { value: 2, component: AccountSettings },
    { value: 3,  component: NotificationsSettings }
  ];
</script>



<section>
  <svelte:component this={items[currentItem].component} {...items[currentItem].props} />
</section>