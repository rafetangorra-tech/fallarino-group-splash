/* The Fallarino Group — splash
   ————————————————————————————
   Access requests are collected silently in the background: FormSubmit
   relays each submission as an email to the address in the endpoint.
   (One-time setup: the first submission triggers an activation email to
   that inbox — click it once and the relay is live. To swap providers,
   point formEndpoint at any JSON form endpoint, e.g. Formspree.) */

const CONFIG = {
  formEndpoint: "https://formsubmit.co/ajax/dfallarino@cliffcomortgage.com",
  fallbackEmail: "",
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
        body: JSON.stringify({
          email,
          _subject: "Access request — The Fallarino Group",
          _template: "table",
          _captcha: "false",
          source: "thefallarinogroup.com",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      const data = await res.json().catch(() => ({}));
      if (String(data.success) === "false") throw new Error("relay not active");
      form.reset();
      say("Thank you for submitting an access request. We'll be in touch with you shortly.", true);
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
