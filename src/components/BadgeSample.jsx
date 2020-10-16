import { Component, createElement } from "react";
import classNames from "classnames";

export class BadgeSample extends Component {
    render() {
        return (
            <span
                className={classNames("widget-googleauthlogin", this.props.type, this.props.className, {
                    [`label-${this.props.bootstrapStyle}`]: !!this.props.bootstrapStyle,
                    "widget-googleauthlogin-clickable": this.props.clickable
                })}
                onClick={this.props.onClickAction}
                ref={this.props.getRef}
                style={this.props.style}
            >
                {this.props.value || this.props.defaultValue}
            </span>
        );
    }
}
