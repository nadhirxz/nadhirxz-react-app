import React, { Component } from 'react'

export default class ProgressBar extends Component {
    getColor = () => {
        return this.props.limit < 35 ? '#c28d07' : this.props.limit < 50 ? '#c2b207' : this.props.limit < 75 ? '#55c207' : '#07c293';
    }
    render() {
        return (
            <div className="progress-block">
                <div className="progress-text-container">
                    <div className='progress-text'>
                        <span className='large print-chars'>{this.props.name}</span>
                        {(this.props.eg) ? <span className='small print-chars'>({this.props.eg})</span> : ''}
                    </div>
                </div>
                <div className="progress">
                    <span style={{ width: `${this.props.limit}%`, backgroundColor: this.getColor() }}></span>
                </div>
            </div>
        )
    }
}