import React, { memo, useEffect, useState } from 'react';
import './index.scss';
import { common, plugins } from '@alilc/lowcode-engine';
import ReactRenderer from '@alilc/lowcode-react-renderer';
import { registerPlugins } from './plugin';

const Designer: React.FC = memo(() => {

  /** 插件是否已初始化成功，因为必须要等插件初始化后才能渲染 Workbench */
  const [hasPluginInited, setHasPluginInited] = useState(false);
  const Workbench = common.skeletonCabin.Workbench;

  useEffect(() => {
    registPlugins();

    return () => {
      // plugins.delete('editorInit');
      // plugins.destroy();
      // plugins.getAll().forEach(p=>{
      //   plugins.
      // });
      // plugins.dispose();
    };
  }, []);

  const startup = async () => {
    // config.setConfig({
    //   enableCondition: true,
    //   enableCanvasLock: true,
    //   // 默认绑定变量
    //   supportVariableGlobally: true,
    //   requestHandlersMap: {
    //     fetch: createFetchHandler()
    //   }
    // });
    // 静态加载 assets
    // material.setAssets(assets as any)
    // setHasPluginInited(true);
    plugins.init().then(() => {
      // setHasPluginInited(true);
    }).catch(err => console.error(err));
  };

  const registPlugins = async () => {
    await registerPlugins();

    plugins.init().then(() => {
      setHasPluginInited(true);
      // console.log(`plugins:`,plugins.getAll());
    }).catch(err => console.error(err));
  };


  return (
    <div className='app-designer' id='app-designer'>
      {hasPluginInited && <Workbench />}
    </div>
  );
});


export default Designer;