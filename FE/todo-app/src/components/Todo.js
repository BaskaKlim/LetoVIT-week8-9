import React, { Component } from 'react';
import Buttons from './Buttons';
import axios from '../axios';
import moment from 'moment';
import '../components/style.css';

class Todo extends Component {

    handleFinish = async () => {
        await axios.patch('/todos/' + this.props.todo.id , {
            finished: true
        });
        this.props.onFinish()

    };
    // 
    handleRemove = async () => {
        await axios.delete('/todos/' + this.props.todo.id ,);
        this.props.onRemove()
    };

    render() {
        // robim dynamicky prvok cize todo aby sa mi vedelo menit preto si ho vytvorim ako konstantu s atrobutmi
        const { title, createdAt, text, finished } = this.props.todo;
        //  syntax pre moment zadefinujem si teraz, createdAt mam zadefinovanu, musim ich prekonvertovat na moment a potom pouzivam metodu diff
       var now = moment();
       var createdAtMoment = moment(createdAt);
// rovno mi to vrati cislo v minutach 
        var difference = now.diff(createdAtMoment, "minutes"); 
        //  podmienka 1 a && podmienka 2, !finished je skrateny zapis 
        var badge  = (difference< 10 && !finished) ? <span class="badge badge-danger" style={{  margin: "1em"}}>New</span> :null;


        return (

            <div className="todo mb-2" style={{ display: "inline-flex", margin: "1em" }}>
                {/* /pozor na zapis style toto berie ako objekt cize 2x kucerave zatvorky a este width bez uvodzoviek  + ak chcem pridat podmienku na ramcek border card tak si musim napisat if podmienku ku tejto 
                class  a v podobe stringu preto tie backsticky  a ak card je podmienka: finish zbehneme mi ukon border -succes ak nie je splnena podmienka, nezbehne. Je to vraj uplne skratene IF syntakticky (google it)  */}
                
                <div className={`card ${finished && ' border-success'}`} style={{ width: "18rem" }}>

                    <div className="card-body">
                        <div className="card-header">
                            <h5 className="card-title">
                                {/* kedze si ho davama ako dynamicky prepisujem konkretny text Nakupny zoznam objektom co viem menit */}
                                {title }
                                {/* pridany badge, ak chcem volat cokolvek co si zadefinujem v javascripte a chcem volat jeho hodnotu musi byt v {}  */}
                              
                                {badge}

                                </h5>

                            <h6 className="card-subtitle mb-2 text-muted" style={{ margin: "1em" }}>
                            Created at {moment(createdAt).format('Do MM YY')}
                            </h6>
                        </div>
                        {text ?
                            <div className="card-text" dangerouslySetInnerHTML={{ __html: text }} >

                            </div> : null

                        }
                        <br />
                        {/* treba pridat buttons propku na onfinish a onremove */}
                        <Buttons todo={this.props.todo} onFinish={this.handleFinish} onRemove={this.handleRemove} />

                    </div >

                </div>
            </div>
        );
    }
}
export default Todo;


