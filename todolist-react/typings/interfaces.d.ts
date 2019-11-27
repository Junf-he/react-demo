import { Art, Component, ComponentClass } from 'art';
import { ConnectedComponentClass } from 'react-redux';
import { AsyncComponent } from '@common/asyncComponent';

type IComponent = () => Promise<{ default: (ConnectedComponentClass<any, any> | ComponentClass<any, any>) }>;

export interface IRouterConfig {
	path: string;
	component: AsyncComponent;
	children?: IRouterConfig[];
	layout?: ComponentClass;
}

interface IRouterV4 {
	path: IRouterConfig.path;
	component: IRouterConfig.AsyncComponent;
	childRoutes?: IRouterV4[];
	layout?: IRouterConfig.layout;
}

export interface IHandle extends IHandle {}