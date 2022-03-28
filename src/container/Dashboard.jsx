import React, { useState } from "react";
import { connect } from "react-redux";
import CharacterView from "../component/CharacterView";
import ConnectedSearchForm from "../component/SearchForm";


function Dashboard(props){

    const [characterState, setCharacterState] = useState({character: ''});

    return(
        <>
            <h1>Dashboard</h1>
            <ConnectedSearchForm setCharacterState={setCharacterState}/>
            <CharacterView charactername={characterState.character}/>
        </>
    )
}

const mapStateToProps = (state) => ({ character: state.character});

const ConnectedDashboard = connect(mapStateToProps)(Dashboard)

export default ConnectedDashboard;