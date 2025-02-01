import {ReactNode} from "react";
import {Button} from "antd";
import {useAppDispatch} from "../../app/rootStore.ts";
import {logOut} from "../../entity/user/store/userStore.ts";

interface Props{
    outlet: ReactNode;
}
export const LayoutBasa = ({ outlet }:Props)=> {
    const dispatch = useAppDispatch();
    return (
        <div>
            <div>
                <div>
                    <Button onClick={()=>{
                        dispatch(logOut());
                    }}>LogOut</Button>
                </div>
            </div>
            <div>
                <div>tododdododo</div>
                <div>{outlet}</div>
            </div>
            <div>Basement</div>
        </div>
    )
}

