import React, { Component } from 'react';




class Buttons extends Component {
    // patchli tomu buttonu sme pridalil funkciu ze v databaze updatne polozku na ktoru si klikla a priradi true
    // toto sme dali prec  handleFinish = async () => {
    // await axios.patch('/todos' + this.props.todo.id + '.json', { finished: true })};


    render() {
        const { finished } = this.props.todo;
        let finishedButton;
        if (!finished) {

            finishedButton = (<button type="button" className="btn btn-outline-success float-right" onClick={this.props.onFinish}>Dokoncit</button>
            );
        }


        return (
            <>
                {/* kedze menim button zmazat na horny krizik close icone, cely button zmazat si vymazem a pridam do returnu prave novy komponent  
                <button type="button" className="btn btn-outline-danger  float-left" onClick={this.props.onRemove}>Zmazat</button>
                {finishedButton}
            */}


                <button type="button" class="close" aria-label="Close" onClick={this.props.onRemove}><span aria-hidden = "true"> &times;</span></button>
                {finishedButton}

            </>
        );
    }
}

export default Buttons;


