import ReactDOM from 'react-dom';
import App from './app';
import 'antd/dist/antd.less';
import { createBrowserRouter, RouterProvider, Navigate, redirect } from "react-router-dom";
import React, { Suspense } from 'react';


// import * as editorCore from '@alilc/lowcode-editor-core';
// import * as editorSkeleton from '@alilc/lowcode-editor-skeleton';
// import * as designer from '@alilc/lowcode-designer';
// import * as engineExt from '@alilc/lowcode-engine-ext';

// window['React'] = React;
// window['ReactDOM'] = ReactDOM;

// console.log(`title:`,require('react'));
console.log(`React:`, window['React']);
console.log(`React Proptype:`, window['React']['PropTypes']);
console.log(`ReactDOM:`, ReactDOM);


// console.log(`AliLowCodeEngine:`,AliLowCodeEngine);

// AliLowCodeEngine['common']['editorCabin'] = editorCore;
// AliLowCodeEngine['common']['skeletonCabin'] = editorSkeleton as any;
// AliLowCodeEngine['common']['designerCabin'] = designer as any;
// AliLowCodeEngine['AliLowCodeEngineExt'] = engineExt;
// console.log(`plugins:`, engine.plugins);

// console.log(`common:`, AliLowCodeEngine.common);
// console.log(`AliLowCodeEngine:`, AliLowCodeEngine);


// console.log(`React:`,(window as any).React);
// console.log(`PropTypes:`,(window as any).React.PropTypes);


const Designer = React.lazy(() => import('./app/pages/Designer'));
const Renderer = React.lazy(() => import('./app/pages/Renderer'));

function WrapperSuspense(WrappedComponent: React.ComponentType) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WrappedComponent />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: "app",
    element: <App />,
    children: [
      {
        path: 'designer',
        element: WrapperSuspense(Designer),
      },
      {
        path: 'renderer',
        element: WrapperSuspense(Renderer),
      },
      {
        index: true,
        element: <Navigate to="designer" replace={true} />,
      }
    ]
  },
  {
    index: true,
    element: <Navigate to="/app" replace={true} />,
  },
  {
    path: '*',
    element: <Navigate to="/app" replace={true} />,
  },
]);

ReactDOM.render((
  <RouterProvider router={router} />
), document.getElementById('root'));