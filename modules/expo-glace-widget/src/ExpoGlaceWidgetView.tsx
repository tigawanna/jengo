import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoGlaceWidgetViewProps } from './ExpoGlaceWidget.types';

const NativeView: React.ComponentType<ExpoGlaceWidgetViewProps> =
  requireNativeView('ExpoGlaceWidget');

export default function ExpoGlaceWidgetView(props: ExpoGlaceWidgetViewProps) {
  return <NativeView {...props} />;
}
