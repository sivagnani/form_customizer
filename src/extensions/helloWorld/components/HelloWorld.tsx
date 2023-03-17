import * as React from 'react';
import { Log, FormDisplayMode } from '@microsoft/sp-core-library';
import { FormCustomizerContext } from '@microsoft/sp-listview-extensibility';
import styles from './HelloWorld.module.scss';
import {Web} from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
export interface IHelloWorldProps {
  context: FormCustomizerContext;
  displayMode: FormDisplayMode;
  onSave: () => void;
  onClose: () => void;
}
export interface IHelloWorldState {
  Name:string;
}
const LOG_SOURCE: string = 'HelloWorld';

export default class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: HelloWorld mounted');
  }

  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: HelloWorld unmounted');
  }
  public addName(){
    Web("https://7zmht7.sharepoint.com/sites/SPFx").lists.getByTitle("form").items.add({Title:this.state.Name});
  }

  public render(): React.ReactElement<{}> {
    return <div className={styles.helloWorld}>
        <label>Name</label>
        <input onChange={(event)=>{this.setState({Name:event.target.value})}}></input>
        <button onClick={()=>{return this.addName()}}>Add</button>
    </div>;
  }
}
