export class SnipLongUsernamesInChat {
  private tag = "prun-beautifier-restore-username";
  cleanup() {
    Array.from(document.getElementsByClassName(this.tag)).forEach(e => {
      e.textContent = e.getAttribute("title");
      e.classList.remove(this.tag);
    });
  }
  run() {
    const elements = Array.from(document.querySelectorAll("div[class^='Sender__container___'] div"));
    elements.forEach(e => {
      const username = e.textContent;
      if (username && username.length > 12) {
        e.textContent = username.slice(0, 12);
        // Add a tooltip to show full username
        e.setAttribute("title", username);
        e.setAttribute("style", "text-decoration: underline dotted");
        e.classList.add(this.tag);
      }
    })
  }
}
