// Reexport the native module. On web, it will be resolved to ExpoGlaceWidgetModule.web.ts
// and on native platforms to ExpoGlaceWidgetModule.ts
export { default } from './src/ExpoGlaceWidgetModule';
export { default as ExpoGlaceWidgetView } from './src/ExpoGlaceWidgetView';
export * from  './src/ExpoGlaceWidget.types';
