import React, {Component} from 'react';
import {updateImage, updateHat, updateGlasses, updateZoomGlasses, updateZoomHat} from "../../store/actions/people";
import {getPeople} from "../../store/reducers/people";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";


class CustomItem extends Component {

    rendererList(){
        this.list = [];
        const {people} = this.props;
        const list = this.props.list.map((item, key) =>
            <div key={key} className={ (people.img === item || people.glasses === item || people.hat === item) ? "content-item-custom active" : "content-item-custom"}
                 style={{backgroundImage: `url(${item})`}}
                 onClick={() => this.onClickItem(item)}>
                <div className={"custom-item-hover"}>
                    <i className="far fa-check-circle"> </i>
                </div>
            </div>
        );
        return list;
    }

    onClickItem(item){
        const {dispatch} = this.props;
        switch (this.props.title) {
            case 'Personne' :
                dispatch(updateImage(item));
                break;
            case 'Lunettes' :
                dispatch(updateGlasses(item));
                break;
            case 'Chapeau' :
                dispatch(updateHat(item));
                break;
            default:
                break;
        }
    }

    onClickArrow(e){
        e.target.closest(".CustomItem").querySelector('.CustomItem__content').classList.toggle("CustomItem__content-active");
        e.target.closest(".CustomItem").querySelector('.fa-chevron-down').classList.toggle("active-arrow");
        if(this.props.title !== 'Personne'){
            e.target.closest(".CustomItem").querySelector('.CustomItem__action-btn').classList.toggle('CustomItem__action-btn-actif');
        }
    }

    render(){
        return (
            <div className="CustomItem">
                <div className="CustomItem__header">
                    <h2>{ this.props.title }</h2>
                    <div className="content-arrow" onClick={(e) => this.onClickArrow(e) }>
                        <i className="fas fa-chevron-down"> </i>
                    </div>
                </div>
                <div className={"CustomItem__content"}>
                    { this.rendererList() }
                </div>
                {this.props.title !== 'Personne' &&
                <div className="CustomItem__action-btn">
                    <div className="btn-zoom-out" onClick={(e) => this.zoomObject(e, 'out')}><i className="fas fa-minus"> </i></div>
                    <div className="btn-zoom-in" onClick={(e) => this.zoomObject(e, 'in')}><i className="fas fa-plus"> </i></div>
                    <div className="btn-delete" onClick={(e) => this.deleteObject(e)}><i className="fas fa-trash-alt"> </i></div>
                </div>
                }
            </div>
        )
    }

    zoomObject(e, zoomInOrOut) {
        const {dispatch, people} = this.props;
        let zoom = zoomInOrOut === 'in' ? 0.05 : -0.05;
        let newZoom = 0;
        switch (e.target.closest(".CustomItem").querySelector('h2').innerHTML) {
            case 'Lunettes' :
                newZoom = people.zoomGlasses + zoom;
                dispatch(updateZoomGlasses(newZoom));
                break;
            case 'Chapeau' :
                newZoom = people.zoomHat + zoom;
                dispatch(updateZoomHat(newZoom));
                break;
            default:
                break;
        }
    }

    deleteObject(e) {
        const {dispatch} = this.props;
        switch (e.target.closest(".CustomItem").querySelector('h2').innerHTML) {
            case 'Lunettes' :
                dispatch(updateGlasses('none'));
                break;
            case 'Chapeau' :
                dispatch(updateHat('none'));
                break;
            default:
                break;
        }
    }
}


const mapStateToProps = state => ({
    people: getPeople(state),
});

const enhance = compose(connect(mapStateToProps));

export default enhance(CustomItem);

