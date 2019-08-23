import React, { Component } from 'react';
import Buttons from './Buttons';
import axios from '../axios';
import moment from 'moment';
import '../components/style.css';

class Todo extends Component {

    handleFinish = async () => {
        await axios.patch('/todos/' + this.props.todo.id, {
            progressState: "finished"
        });
        this.props.onFinish()
    };
    // pridala som funckciu na handleStartTodo so stavom "progress"
    handleStartToDo = async () => {
        await axios.patch('/todos/' + this.props.todo.id, {
            progressState: "progress"
        });
        this.props.onStart()

    };
    handleRemove = async () => {
        await axios.delete('/todos/' + this.props.todo.id);
        this.props.onRemove()
    };

    render() {
        // robim dynamicky prvok cize todo aby sa mi vedelo menit preto si ho vytvorim ako konstantu s atrobutmi
        // menim stav finished na stav progressState a uz ho nedeklarujem ako boolean ale ako :" " a v stringu konkretne stavy co chcem
        const { title, createdAt, text, deadlineTime, progressState } = this.props.todo;
        //  syntax pre moment zadefinujem si teraz, createdAt mam zadefinovanu, musim ich prekonvertovat na moment a potom pouzivam metodu diff
        var now = moment();
        var createdAtMoment = moment(createdAt);
        // rovno mi to vrati cislo v minutach 
        var difference = now.diff(createdAtMoment, "minutes");
        //  podmienka 1 a && podmienka 2, !finished je skrateny zapis 
        var badge = (difference < 10 && progressState !== "finished") ? <span class="badge badge-danger" style={{ margin: "1em" }}>New</span> : null;
        // zadefinujem si classes card, ktore si upravim v style v css
        let classes = "card";

        /*zadefinujem si pre card podmienky, ktory zo stylov mi ma zavolat, toto iste sa da zapisat aj classes= classes + " customSeccess"
        cize chcem aby mi to vzalo aj formatovanie card a k nemu pridalo az nove styly. Zaroven musi byt "medzera customSuccess"
        lebo ak nedam medzeru tak mi to v stringu spoji ku card a teda vznikne cardcustomSuccess a taku klasu nepozna
        */

        if (progressState === "finished") classes += " customSuccess";
        else if (progressState === "progress") classes += " customInProgress";
        else classes += " customDanger";

        /* pridavam si ramcek ak mi passol deadline. Treba mi urcit opat podmienku, danu klasu uz dole volam, staci mi pridat dalsiu podmienku ze ak deadline passed, 
         then do style passedDeadline, ktory som si definovala v style.css */

        if (moment(deadlineTime).isBefore(now)) classes += " passedDeadline";



        return (

            <div className="todo mb-2" style={{ display: "inline-flex", margin: "1em" }}>
                {/* /pozor na zapis style toto berie ako objekt cize 2x kucerave zatvorky a este width bez uvodzoviek  + ak chcem pridat podmienku na ramcek border card tak si musim napisat if podmienku ku tejto 
                class  a v podobe stringu preto tie backsticky  a ak card je podmienka: finish zbehneme mi ukon border -succes ak nie je splnena podmienka, nezbehne. Je to vraj uplne skratene IF syntakticky (google it)  */}

                <div className={classes} >

                    <div className="card-body">
                        <div className="card-header">

                            {/* pridana close icon hore do headeru, kod si najdes na https://getbootstrap.com/docs/4.3/utilities/close-icon/ 
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span> </button>
                            este ti treba pridat onClick nanho. Drha moznost je ze si ho definujes priamo v Buttons a v CSSsku si urcis styl, ktory ti ho z dola presunie hore/  */}

                            <h5 className="card-title">
                                {/* kedze si ho davama ako dynamicky prepisujem konkretny text Nakupny zoznam objektom co viem menit */}
                                {title}
                                {/* pridany badge, ak chcem volat cokolvek co si zadefinujem v javascripte a chcem volat jeho hodnotu musi byt v {}  */}

                                {badge}

                            </h5>

                            <h6 className="card-subtitle mb-2 text-muted">
                                Created at {moment(createdAt).format('Do MM YY')}
                            </h6>


                            <h6 className="card-subtitle mb-2 text-muted">
                                Deadline at {moment(deadlineTime).format('Do MM YY')}
                            </h6>

                        </div>
                        {text ?
                            <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} >

                            </div> : null

                        }
                        <br />
                        {/* treba pridat buttons propku na onfinish a onremove */}
                        <Buttons todo={this.props.todo} onFinish={this.handleFinish} onStart={this.handleStartToDo} onRemove={this.handleRemove} />

                    </div>

                </div>
            </div>
        );
    }
}

export default Todo;

