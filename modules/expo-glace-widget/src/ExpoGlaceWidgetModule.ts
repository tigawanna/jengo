import { NativeModule, requireNativeModule } from 'expo';

import { ExpoGlaceWidgetModuleEvents } from './ExpoGlaceWidget.types';

declare class ExpoGlaceWidgetModule extends NativeModule<ExpoGlaceWidgetModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoGlaceWidgetModule>('ExpoGlaceWidget');
