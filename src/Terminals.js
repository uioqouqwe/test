import React from 'react';
import './Terminals.scss';

class Terminals extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            terminal: '',
            description: '',
            terminalRows: [],
        };
    }

    terminalHandler = (e) => {
        this.setState({
            terminal: e.target.value
        });
    }

    descriptionHandler = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    terminalsFormHandler = (e) => {
        e.preventDefault();
        const tRows = this.state.terminalRows;
        tRows.push({
            tName: this.state.terminal,
            tDescription: this.state.description,
        });
        this.setState({
            terminalRows: tRows,
            terminal: '',
            description: ''
        });
    }

    deleteHandler = (index) => {
        const before = this.state.terminalRows.slice(0, index);
        const after = this.state.terminalRows.slice(index + 1);
        this.setState({
            terminalRows: [...before, ...after]
        });
    }

    render() {
        return (
            <div>
                <form className='terminals-form' onSubmit={this.terminalsFormHandler}>
                    <label htmlFor='terminal'>Название терминала</label>
                    <input type='text' id='terminal' value={this.state.terminal} onChange={this.terminalHandler}/>
                    <label htmlFor='description'>Описание</label>
                    <textarea id='description' value={this.state.description} onChange={this.descriptionHandler}/>
                    <input type='submit' value='Добавить'/>
                </form>
                <ol className='terminals-list'>
                    {this.state.terminalRows.map((item, index) =>
                        <li key={index}>
                            <span>{item.tName}</span>
                            <button onClick={() => this.deleteHandler(index)}>Удалить</button>
                        </li>
                    )}
                </ol>
            </div>
        );
    }
}

export default Terminals;