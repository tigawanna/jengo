import * as React from 'react';

import { ExpoGlaceWidgetViewProps } from './ExpoGlaceWidget.types';

export default function ExpoGlaceWidgetView(props: ExpoGlaceWidgetViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
