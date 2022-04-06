import "./styles.css";

const calculator = {
  read(a, b) {
    this.a = +a;
    this.b = +b;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};

const pressKey = (n) => {
  if (!isNaN(+n)) {
    if (display.textContent === "0") {
      display.textContent = n;
    } else {
      display.textContent += n;
    }
  }
};

const display = document.querySelector(".display");
const nums = document.querySelectorAll(".numpad");
nums.forEach((n) => {
  n.addEventListener("click", () => pressKey(n.textContent));
});
