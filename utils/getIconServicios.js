import { GiElectric } from "react-icons/gi"
import { FaWater } from "react-icons/fa";
import { BiCylinder } from "react-icons/bi";
import { IoWaterOutline } from "react-icons/io5";

export const getIconServicios = icon =>{
    switch(icon){
        case 'electricidad':
            return <GiElectric />
        case 'sanitaria':
            return <FaWater />
        case 'gas':
            return <BiCylinder />
        case 'hidraulica':
            return <IoWaterOutline />
        default: 
            return ''
    }
}