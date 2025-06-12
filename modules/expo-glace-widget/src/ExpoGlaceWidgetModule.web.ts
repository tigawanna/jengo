import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './ExpoGlaceWidget.types';

type ExpoGlaceWidgetModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class ExpoGlaceWidgetModule extends NativeModule<ExpoGlaceWidgetModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(ExpoGlaceWidgetModule, 'ExpoGlaceWidgetModule');
