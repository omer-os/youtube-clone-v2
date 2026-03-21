class SidebarState {
  open = $state(false);
  state: "collapsed" | "default" = $state("collapsed")

  toggle() {
    this.open = !this.open;
  }

  toggleState() {
    this.state = this.state === "collapsed" ? "default" : "collapsed"
  }
}
export const sidebar = new SidebarState()

