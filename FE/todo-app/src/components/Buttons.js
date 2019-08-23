import React, { Component } from 'react';


class Buttons extends Component {
    // patchli tomu buttonu sme pridalil funkciu ze v databaze updatne polozku na ktoru si klikla a priradi true
    // toto sme dali prec  handleFinish = async () => {
    // await axios.patch('/todos' + this.props.todo.id + '.json', { finished: true })};

    render() {
        const { progressState } = this.props.todo;
        let finishedButton;
        let progressButton;

        if (progressState === "ready") {

            progressButton = (<button type="button" className="btn btn-outline-success float-right" onClick={this.props.onStart}>Zacat</button>
            );
        }
        else if (progressState === "progress") {
            finishedButton = (<button type="button" className="btn btn-outline-warning float-right" onClick={this.props.onFinish}>Dokoncit</button>
            );
        };

        return (
            <>
                {/* kedze menim button zmazat na horny krizik close icone, cely button zmazat si vymazem a pridam do returnu prave novy komponent  
                <button type="button" className="btn btn-outline-danger  float-left" onClick={this.props.onRemove}>Zmazat</button>
                {finishedButton}
            */}


                < button type="button" class="close" aria-label="Close" onClick={this.props.onRemove} > <span aria-hidden="true"> &times;</span></button >
                {/*musim si zavolat hodnoty vsetkych buttonov a co maju robit. progressButton a finishedButton mam uz definovany v podmienke, 
                takze ich len volam, hore si ale nad tym musim zadefinovat aj remove button X  */}
                {progressButton}
                {finishedButton}

            </>
        );
    }
}

export default Buttons;


