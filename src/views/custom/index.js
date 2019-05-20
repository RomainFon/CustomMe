import React, {Component} from 'react';
import {getText} from "../../store/reducers/text";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import CustomItem from "../customItem/customItem";

class Custom extends Component{

    constructor(props){
        super(props);
        this.state = {
            people: [
                'assets/people/people-1.jpg',
                'assets/people/people-2.jpg',
                'assets/people/people-3.jpg'
            ],
            glasses: [
                'assets/glasses/glasses-1.png',
                'assets/glasses/glasses-2.png'
            ],
            hat: [
                'assets/hat/hat-1.png',
                'assets/hat/hat-2.png',
                'assets/hat/hat-3.png'
            ]
        }
    }

    render(){
        return (
            <div className="Custom">
                <h1 className="Custom__main-title">CustomMe</h1>
                <CustomItem title={"Personne"} list={this.state.people}/>
                <CustomItem title={"Lunettes"} list={this.state.glasses}/>
                <CustomItem title={"Chapeau"} list={this.state.hat}/>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    text: getText(state),
});

const enhance = compose(connect(mapStateToProps));

export default enhance(Custom);

