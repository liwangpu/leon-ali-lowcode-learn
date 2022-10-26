import './index.scss';
import { NavLink, Outlet } from "react-router-dom";
import { memo } from 'react';
import { FileOutlined } from '@ant-design/icons';

const routes: { title: string; path: string }[] = [
  {
    title: '设计器',
    path: '/app/designer',
  },
  {
    title: '渲染器',
    path: '/app/renderer',
  }
];

const RouterLinks = routes.map(r => (
  <NavLink key={r.title} to={r.path} className={({ isActive }) => isActive ? "item actived" : "item"}>
    <FileOutlined className='icon' />
    <p>{r.title}</p>
  </NavLink >
));

const App: React.FC = memo((props) => {

  return (
    <div className='tutorial-app'>
      <div className="navs">
        <div className="header">
          <p className='title'>学习里程</p>
        </div>
        <div className="content">
          {RouterLinks}
        </div>
      </div>
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
});

export default App;