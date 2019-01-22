import React, {Component} from 'react';
import './post-list-item.css'
let date1 = new Date();
let options = {
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
let date = date1.toLocaleString("ru", options);


export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
            edit: true
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.EditText = this.EditText.bind(this);
    }

    onEdit(){
        this.setState(({edit}) => ({
            edit: !edit
        }))

    }
    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }
    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    EditText(){
        let edittext = document.querySelector('.change');
        let t = edittext.value;
        this.setState(this.props.label += t)
    }

    render() {
        const {label} = this.props;
        const {important, like,edit} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        let hide = 'change';
        if (important) {
            classNames += ' important'
        }
        if (like) {
            classNames += ' like'
        }
        if (edit) {
            hide += ' hide';
        }

        return (
            <div className={classNames}>
            <span
                className="app-list-item-label"
                onClick={this.onLike}>
                {label}
            </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                    {date}
                    <button className="edit" onClick={this.onEdit}>Edit</button>
                    <input className={hide}></input>
                    <button className={hide} onClick={this.EditText}>Enter</button>
                </div>

            </div>
        )
    }
}

