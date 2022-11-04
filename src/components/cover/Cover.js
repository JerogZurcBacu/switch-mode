import React from "react";
import {
    CoverContainer,
    CoverWrapper,
    InfoContainer,
    CustomButton,
} from "./Cover.elements";
import { BsSun, BsMoon } from "react-icons/bs";

const Cover = () => {
    return (
        <>
            <CoverContainer>
                <CoverWrapper>
                    <InfoContainer>
                        <BsSun />
                        <h1>Hello, I'm in</h1>
                        <h1>Light Mode</h1>
                        <CustomButton>Get Started</CustomButton>
                    </InfoContainer>
                </CoverWrapper>
            </CoverContainer>
        </>
    );
};
export default Cover;