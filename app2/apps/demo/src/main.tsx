import ReactDOM from 'react-dom';
import App from './app';
import 'antd/dist/antd.less';
import { createBrowserRouter, RouterProvider, Navigate, redirect } from "react-router-dom";
import React, { Suspense } from 'react';

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