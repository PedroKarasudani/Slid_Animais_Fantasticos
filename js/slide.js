export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.dist = { finalPosition: 0, startX: 0, movement: 0 };
  }

  moveSlide(distX) {
    this.dist.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.dist.movement = (this.dist.startX - clientX) * 1.6;
    return this.dist.finalPosition - this.dist.movement;
  }

  onStart(event) {
    event.preventDefault();
    this.dist.startX = event.clientX;
    this.wrapper.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {
    event.preventDefault();
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }

  onEnd(event) {
    event.preventDefault();
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.dist.finalPosition = this.dist.movePosition;
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
