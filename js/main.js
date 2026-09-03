/* The Fallarino Group — splash
   ————————————————————————————
   Fill in CONFIG when ready:
   - formEndpoint: create a free form at https://formspree.io and paste
     the endpoint, e.g. "https://formspree.io/f/xyzabcde".
   - fallbackEmail: if no endpoint is set, the button opens a pre-filled
     email to this address instead. */

const CONFIG = {
  formEndpoint: "",
  fallbackEmail: "dfallarino@cliffcomortgage.com",
};

const form = document.getElementById("access-form");
const note = document.getElementById("form-note");
const emailInput = document.getElementById("email");
const button = form.querySelector("button");

document.getElementById("year").textContent = new Date().getFullYear();

function say(message, ok = false) {
  note.textContent = message;
  note.classList.toggle("ok", ok);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = emailInput.value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    say("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (CONFIG.formEndpoint) {
    button.disabled = true;
    say("Sending…");
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, source: "fallarino-group-splash" }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      say("Received. You'll hear from us first.", true);
    } catch {
      say("Something went wrong — please try again.");
    } finally {
      button.disabled = false;
    }
    return;
  }

  if (CONFIG.fallbackEmail) {
    const subject = encodeURIComponent("Private access request — The Fallarino Group");
    const body = encodeURIComponent(`Please add ${email} to the access list.`);
    window.location.href = `mailto:${CONFIG.fallbackEmail}?subject=${subject}&body=${body}`;
    say("Your email app opened — press send to complete your request.", true);
    return;
  }

  say("Access requests open shortly. Check back soon.", true);
});
