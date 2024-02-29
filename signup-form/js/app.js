const App = {
  $: {
    passInput: document.getElementById("password1"),
    confirmPassInput: document.getElementById("password2"),

    errorMsg: document.getElementById("error-msg"),

    submitBtn: document.getElementById("submit-btn"),
  },

  init() {
    App.$.submitBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const password = App.$.passInput.value;
      const confirmPass = App.$.confirmPassInput.value;

      if (password != confirmPass) {
        App.$.passInput.classList.add("error");
        App.$.confirmPassInput.classList.add("error");
        const msgText = document.createTextNode("Password didn't matched!");
        App.$.errorMsg.appendChild(msgText);
      }
    });
  },
};

window.addEventListener("load", App.init);
