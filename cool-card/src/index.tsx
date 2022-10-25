import * as React from 'react';
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface ComponentProps {
  title: string;
  content: string;
}

const ExampleComponent = (props: ComponentProps, ref: any) => {
  const { title, content, ...others } = props;
  const buttonRef = React.useRef<HTMLButtonElement>();
  const test = (e: React.MouseEvent) => {
    console.log(`button click`, e);
    console.log(`btn:`, e.nativeEvent.composedPath());
  };
  return (
    <div ref={ref} className="ExampleComponent" {...others}>
      <h1>{title}</h1>
      <button onClick={test} ref={buttonRef}>点我啊</button>
      {content || '一个很酷的卡片组件'}
    </div>
  );
};

const RefExampleComponent = forwardRef(ExampleComponent as ForwardRefRenderFunction<any, ComponentProps>);
RefExampleComponent.displayName = 'ExampleComponent';

export default RefExampleComponent;
