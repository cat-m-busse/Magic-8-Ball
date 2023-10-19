// Magic 8 Ball

// HTML variables
let replySpan = document.getElementById("reply");

// add an event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let output = document.getElementById("input").value.toLowerCase();

  if (output === "does magic 8 ball actually work") {
    replySpan.innerHTML = `<p class="advice">How dare you doubt me!</p>`;
  } else if (output === "is javascript awesome") {
    replySpan.innerHTML = `<p class="advice">Of course! JavaScript rocks!</p>`;
  } else if (output === "should i watch bungo stray dogs") {
    replySpan.innerHTML = `<p class="advice">Without a doubt! It's totally worth it!</p>`;
  } else if (
    output === "are you telling the truth" ||
    output === "are you sure"
  ) {
    replySpan.innerHTML = `<p class="advice">Of course! I'm magic, aren't I?</p>`;
  } else if (output === "") {
    replySpan.innerHTML = `<p class="advice">Please ask a question...</p>`;
  } else {
    let num = Math.random();

    if (num < 0.2) {
      replySpan.innerHTML = `<p class="advice">Without a Doubt.</p>`;
    } else if (num < 0.4) {
      replySpan.innerHTML = `<p class="advice">As I see it, yes.</p>`;
    } else if (num < 0.6) {
      replySpan.innerHTML = `<p class="advice">Concentrate and ask again.</p>`;
    } else if (num < 0.8) {
      replySpan.innerHTML = `<p class="advice">Don't count on it.</p>`;
    } else {
      replySpan.innerHTML = `<p class="advice">Outlook not so good.</p>`;
    }
  }
}
