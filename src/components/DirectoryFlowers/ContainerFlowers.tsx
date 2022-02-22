import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getDataFlowersThunk} from "../../redux/reducers/flowers-reducer";

const ContainerFlowers = () => {
    const flowers = useSelector( (state: AppStateType) => state.flowersCatalog.flowers);

    const dispatch = useDispatch();

    // useEffect(() => {dispatch(getDataFlowersThunk())}, []);

    return <div>
        {flowers.map(i => (<img src={i.photo}/>))}
    </div>
}
 export default React.memo(ContainerFlowers);