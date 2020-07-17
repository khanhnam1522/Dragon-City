import React, {Component} from 'react';
import AccountInfo from './AccountInfo';

class BreadCrumb extends Component{
    render(){
        return (
            <section className="breadcrumb breadcrumb_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb_iner text-center">
                                <div className="breadcrumb_iner_item">
                                    <h2>{this.props.title}</h2>
                                    <h3>{this.props.description}</h3>
                                    <AccountInfo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default BreadCrumb;