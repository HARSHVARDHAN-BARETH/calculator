import { Dimensions } from "react-native"

export const getHeight = ()=>{
    const {height} = Dimensions.get("window")
    return height 
}

const {width, height} = Dimensions.get("window");

const AppDimension = {
    width50: width*0.5,
    height: height,
    height50: height * 0.5
}

export default AppDimension;



// constants:
//  1.Dimensions
//  2.Colors
//  3.AppString
//  4.ImageConstant
//  5.RouteConstant