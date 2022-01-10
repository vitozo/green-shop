import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getDataFlowersThunk} from "../../redux/reducers/flowers-reducer";
import {flowersType} from "../../commonTypes/commonTypes";
import React, {useEffect} from "react";

type PropsType = {
    flowers: Array<flowersType>
    getDataFlowersThunk: () => void
}

const ContainerFlowers: React.FC<PropsType> = ({flowers, getDataFlowersThunk}) => {

    useEffect(() => {
        getDataFlowersThunk()
    }, [!flowers])

    return <div>
        {flowers.map(i => (<img src={i.photo}/>))}
    </div>
}

type mapStateToPropsType = {
    flowers: Array<flowersType>
}

type mapDispatchToPropsType = {
    getDataFlowersThunk: () => void
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    flowers: state.flowersCatalog.flowers
})


export default connect<mapStateToPropsType, mapDispatchToPropsType, unknown, AppStateType>(mapStateToProps, {getDataFlowersThunk})(ContainerFlowers)