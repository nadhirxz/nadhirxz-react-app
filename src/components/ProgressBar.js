import React, { Component } from 'react'

export default class ProgressBar extends Component {
    getColor = () => {
        return this.props.limit < 35 ? '#ec5729' : this.props.limit < 50 ? '#eee131' : this.props.limit < 75 ? '#9de63d' : '#07c293';
    }
    render() {
        return (
            <div className="progress-block">
                <div className="progress-text-container">
                    <div className='progress-text'>
                        <span className='large'>{this.props.name}</span>
                        {(this.props.eg) ? <span className='small'>({this.props.eg})</span> : ''}
                    </div>
                </div>
                <div className="progress">
                    <span style={{ width: `${this.props.limit}%`, backgroundColor: this.getColor() }}></span>
                </div>
            </div>
        )
    }
}