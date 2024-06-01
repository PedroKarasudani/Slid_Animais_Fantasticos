export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    console.log("mousedown");
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {
    event.preventDefault();
    console.log("moveu");
  }

  onEnd(event) {
    event.preventDefault();
    console.log("mouseup");
    this.wrapper.removeEventListener("mousemove", this.onMove);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  addSlideEvent() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }

  init() {
    this.bindEvents();
    this.addSlideEvent();
    return this;
  }
}
