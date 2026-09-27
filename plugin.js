Plugin.register('stonerlights', {
  title: 'StonerLights',
  author: 'dangeroushiveplugs0-dev',
  description: 'Lighting effects with camera-facing smoke billboards.',
  icon: 'lightbulb',
  version: '0.1.0',
  variant: 'both',

  onload() {
    console.log('StonerLights loaded');
  },

  onunload() {
    console.log('StonerLights unloaded');
  }
});
