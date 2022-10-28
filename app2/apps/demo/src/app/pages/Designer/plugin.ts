// // @ts-nocheck
// import { project, plugins, common, skeleton, init, config, ILowCodePluginContext, material } from '@alilc/lowcode-engine';
// import { createFetchHandler } from '@alilc/lowcode-datasource-fetch-handler';
// import AliLowCodeEngineExt from '@alilc/lowcode-engine-ext';
// import { Button } from '@alifd/next';
// import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
// import ComponentsPane from '@alilc/lowcode-plugin-components-pane';
// import ZhEnPlugin from '@alilc/lowcode-plugin-zh-en';
// import CodeGenPlugin from '@alilc/lowcode-plugin-code-generator';
// import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane';
// import SchemaPlugin from '@alilc/lowcode-plugin-schema';
// import CodeEditor from "@alilc/lowcode-plugin-code-editor";
// import ManualPlugin from "@alilc/lowcode-plugin-manual";
// import Inject, { injectAssets } from '@alilc/lowcode-plugin-inject';
// import SimulatorResizer from '@alilc/lowcode-plugin-simulator-select';
// import { getPageSchema, loadIncrementalAssets } from './utils';

// import assets from './assets.json'

// export async function registerPlugins() {
//   // await plugins.register(ManualPlugin);

//   // await plugins.register(Inject as any);

//   // plugin API 见 https://lowcode-engine.cn/docV2/ibh9fh
//   // SchemaPlugin.pluginName = 'SchemaPlugin';
//   // await plugins.register(SchemaPlugin);

//   // SimulatorResizer.pluginName = 'SimulatorResizer';
//   // plugins.register(SimulatorResizer);

//   const editorInit = (ctx: ILowCodePluginContext) => {
//     return {
//       name: 'editor-init',
//       async init() {
//         // 修改面包屑组件的分隔符属性setter
//         // const assets = await (
//         //   await fetch(
//         //     `https://alifd.alicdn.com/npm/@alilc/lowcode-materials/build/lowcode/assets-prod.json`
//         //   )
//         // ).json();
//         // 设置物料描述
//         const { material, project } = ctx;
//         console.log(`init:`,);
//         await material.setAssets(await injectAssets(assets));

//         // const schema = await getPageSchema();
//         // console.log(`schema:`,schema);

//         // // // 加载 schema
//         // project.openDocument(schema);
//       },
//     };
//   }
//   editorInit.pluginName = 'editorInit';
//   await plugins.register(editorInit);

//   // const builtinPluginRegistry = (ctx: ILowCodePluginContext) => {
//   //   return {
//   //     name: 'builtin-plugin-registry',
//   //     async init() {
//   //       const { skeleton } = ctx;
//   //       // 注册 logo 面板
//   //       // skeleton.add({
//   //       //   area: 'topArea',
//   //       //   type: 'Widget',
//   //       //   name: 'logo',
//   //       //   // content: Logo,
//   //       //   // contentProps: {
//   //       //   //   logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
//   //       //   //   href: 'https://lowcode-engine.cn',
//   //       //   // },
//   //       //   props: {
//   //       //     align: 'left',
//   //       //   },
//   //       // });

//   //       // 注册组件面板
//   //       const componentsPane = skeleton.add({
//   //         area: 'leftArea',
//   //         type: 'PanelDock',
//   //         name: 'componentsPane',
//   //         content: ComponentsPane,
//   //         contentProps: {},
//   //         props: {
//   //           align: 'top',
//   //           icon: 'zujianku',
//   //           description: '组件库',
//   //         },
//   //       });
//   //       componentsPane?.disable?.();
//   //       project.onSimulatorRendererReady(() => {
//   //         componentsPane?.enable?.();
//   //       })
//   //     },
//   //   };
//   // }
//   // builtinPluginRegistry.pluginName = 'builtinPluginRegistry';
//   // await plugins.register(builtinPluginRegistry);

//   // const loadAssetsSample = (ctx: ILowCodePluginContext) => {
//   //   return {
//   //     name: 'loadAssetsSample',
//   //     async init() {
//   //       const { skeleton } = ctx;

//   //       skeleton.add({
//   //         name: 'loadAssetsSample',
//   //         area: 'topArea',
//   //         type: 'Widget',
//   //         props: {
//   //           align: 'right',
//   //           width: 80,
//   //         },
//   //         content: (
//   //           <Button onClick={loadIncrementalAssets}>
//   //             异步加载资源
//   //           </Button>
//   //         ),
//   //       });
//   //     },
//   //   };
//   // };
//   // loadAssetsSample.pluginName = 'loadAssetsSample';
//   // await plugins.register(loadAssetsSample);

//   // // 注册回退/前进
//   // await plugins.register(UndoRedoPlugin);

//   // // 注册中英文切换
//   // await plugins.register(ZhEnPlugin);
// };
