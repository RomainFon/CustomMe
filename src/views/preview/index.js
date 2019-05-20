import React, {Component} from 'react';
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {getPeople} from "../../store/reducers/people";
import {Application, Sprite, Texture} from "pixi.js";


class Preview extends Component{

    componentDidMount(){
        this.app = new Application({ transparent: true });
        this.refs.container.appendChild(this.app.view);
        window.addEventListener('resize', this.onResize.bind(this));

        this.img = new Sprite.from('assets/people/people-1.jpg');
        this.img.anchor.set(0.5);
        this.app.stage.addChild(this.img);
        console.log(this.img);

        this.glasses = new Sprite.from('a');
        this.glasses.anchor.set(0.5);
        this.glasses.scale.x = this.props.people.zoomGlasses;
        this.glasses.scale.y = this.props.people.zoomGlasses;
        this.glasses.interactive = true;
        this.glasses.buttonMode = true;
        this.glasses
            // events for drag start
            .on('mousedown', this.onDragStart)
            .on('touchstart', this.onDragStart)
            // events for drag end
            .on('mouseup', this.onDragEnd)
            .on('mouseupoutside', this.onDragEnd)
            .on('touchend', this.onDragEnd)
            .on('touchendoutside', this.onDragEnd)
            // events for drag move
            .on('mousemove', this.onDragMove)
            .on('touchmove', this.onDragMove);
        this.app.stage.addChild(this.glasses);

        this.hat = new Sprite.from('a');
        this.hat.anchor.set(0.5);
        this.hat.scale.x = this.props.people.zoomHat;
        this.hat.scale.y = this.props.people.zoomHat;
        this.hat.interactive = true;
        this.hat.buttonMode = true;
        this.hat
        // events for drag start
            .on('mousedown', this.onDragStart)
            .on('touchstart', this.onDragStart)
            // events for drag end
            .on('mouseup', this.onDragEnd)
            .on('mouseupoutside', this.onDragEnd)
            .on('touchend', this.onDragEnd)
            .on('touchendoutside', this.onDragEnd)
            // events for drag move
            .on('mousemove', this.onDragMove)
            .on('touchmove', this.onDragMove);
        this.app.stage.addChild(this.hat);

        this.onResize();
    }

    onDragStart(event) {
        this.data = event.data;
        this.alpha = 0.5;
        this.dragging = true;
    }

    onDragEnd() {
        this.alpha = 1;
        this.dragging = false;
        // set the interaction data to null
        this.data = null;
}

    onDragMove() {
        if (this.dragging) {
            const newPosition = this.data.getLocalPosition(this.parent);
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        }
    }

    onResize() {
        const {offsetWidth : w, offsetHeight : h} = this.refs.container;
        this.app.renderer.resize(w, h);

        this.img.x = this.glasses.x = w/2;
        this.img.y = this.glasses.y = h/2;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.people.img !== prevProps.people.img){
            this.img.texture = Texture.from(this.props.people.img);
        }
        if(this.props.people.glasses !== prevProps.people.glasses){
            this.glasses.texture = Texture.from(this.props.people.glasses);
        }
        if(this.props.people.hat !== prevProps.people.hat){
            this.hat.texture = Texture.from(this.props.people.hat);
        }
        if(this.props.people.zoomGlasses !== prevProps.people.zoomGlasses){
            this.glasses.scale.x = this.props.people.zoomGlasses;
            this.glasses.scale.y = this.props.people.zoomGlasses;
        }
        if(this.props.people.zoomHat !== prevProps.people.zoomHat){
            this.hat.scale.x = this.props.people.zoomHat;
            this.hat.scale.y = this.props.people.zoomHat;
        }
    }

    downloadImage(){
        let canvas = this.app.renderer.plugins.extract.canvas(this.app.stage);
        let link = document.createElement('a');
        link.download = "MyCustomMe.jpeg";
        link.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");;
        link.click();
    }

    render(){
        return (
            <div className="Preview" ref={"container"}>
                <div className={"Preview__save"} onClick={() => this.downloadImage() }>Save My CustomMe</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    people: getPeople(state)
});

const enhance = compose(connect(mapStateToProps));

export default enhance(Preview);

