import React from 'react';
import {getText} from "../../store/reducers/text";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

const Preview = (props) => {
    const {text} = props;
    return (
        <div className="Preview">
            <h1>{text.value}</h1>
            <Link to={'/custom'}>custom</Link>
        </div>
    );
}

const mapStateToProps = state => ({
    text: getText(state),
});

const enhance = compose(connect(mapStateToProps));

export default enhance(Preview);

