class SidebarState {
  open = $state(false);

  toggle() {
    this.open = !this.open;
  }
}
export const sidebar = new SidebarState()

