export class SmokeBillboard {
  constructor(mesh) {
    this.mesh = mesh;
    this.enabled = true;
  }

  update(camera) {
    if (!this.enabled || !this.mesh || !camera) return;

    // Keep the smoke card facing the viewport camera.
    this.mesh.rotation.copy(camera.rotation);
  }

  dispose() {
    this.enabled = false;
    this.mesh = null;
  }
}
