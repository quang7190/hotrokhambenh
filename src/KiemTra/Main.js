import React, { Component } from 'react';
import Body from './Body';
export default class MainComp extends Component {
    render() {
        return (
            <section className="header">
                <div className="overlay">
                    <div className="row">
                        <div className="navbar navbar-default">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    <div className="navlogo col-lg-2">
                                        <p className="navbar-brand">An Tâm</p>
                                    </div>
                                </div>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <div className="col-lg-8">
                                        <ul className="nav navbar-nav nav-links">
                                            <li><a href="#">Demos</a></li>
                                            <li><a href="#">Featured</a></li>
                                            <li><a href="#">Pages</a></li>
                                            <li><a href="#">Elements</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Shop</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-2 right">
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Body/>
                </div>
            </section>

        );
    };
}
