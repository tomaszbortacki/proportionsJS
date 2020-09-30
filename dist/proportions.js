const PROPORTIONS = document.querySelectorAll("[data-proportions]");
let proportionTypes = [];
if (PROPORTIONS.length > 0) {
  class Proportions {
    constructor(proportions) {
      this.p = proportions.split(",")[1].split("-"); // Name and proportions
      this.h = 0; // height
      this.w = 0; // width
      this.timeout;
      this.d = 0; // latency

      this.resize = () => {
        this.e = document.querySelectorAll(
          "[data-proportions='" + proportions + "']"
        ); // Elementy tego samego typu
        this.w = this.e[0].offsetWidth;
        this.h = (this.w / this.p[0]) * this.p[1];
        for (const el of this.e) {
          el.style.height = this.h + "px";
        }
      };

      this.init = () => {
        window.clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.resize();
        }, this.d);
      };

      this.init();
      window.addEventListener("load", () => {
        this.init();
      });

      window.addEventListener("resize", () => {
        this.init();
      });
    }
  }

  const I_TYPES = [];

  const initProportions = () => {
    for (const el of PROPORTIONS) {
      const proportionEl = el.dataset.proportions;
      if (!proportionTypes.includes(proportionEl));
      proportionTypes.push(proportionEl);
    }

    for (let el of proportionTypes) {
      I_TYPES.push(new Proportions(el));
    }

    console.log(I_TYPES);
  };

  window.addEventListener("load", initProportions);
}
