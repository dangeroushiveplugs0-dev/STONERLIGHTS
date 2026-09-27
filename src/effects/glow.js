export class LightGlow {
  constructor(mesh) {
    this.mesh = mesh;
    this.time = 0;
  }

  update(delta) {
    if (!this.mesh) return;

    this.time += delta;
    const pulse = 1 + Math.sin(this.time * 2) * 0.03;
    this.mesh.scale.set(pulse, pulse, pulse);
  }
}
