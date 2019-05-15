import React from 'react';
import {updateText} from "../../store/actions/text";
import {getText} from "../../store/reducers/text";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

const Custom = (props) => {
    const {text,dispatch} = props;
    return (
        <div className="Preview">
            <input onChange={e => dispatch(updateText(e.currentTarget.value))} value={text.value} />
            <Link to={'/'}>preview</Link>
        </div>
    );
};

const mapStateToProps = state => ({
    text: getText(state),
});

const enhance = compose(connect(mapStateToProps));

export default enhance(Custom);

