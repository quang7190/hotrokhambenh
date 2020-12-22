import React,{Component} from 'react';
import ShowData from './ShowMain';
export default class MainComp extends Component {
    render() {
        return(
            <div className="right-main">
                <div className="container-fluid">
                  <ShowData />
                </div>
            </div>
        );
    };
}
