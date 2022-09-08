import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    :root{
        --mainHeader:${({ theme }) => theme.mainHeader};
        --iconColor:${({ theme }) => theme.iconColor};
        --boxShadow:${({ theme }) => theme.boxShadow};   
        --borderColor:${({ theme }) => theme.borderColor};   
        --darkerBackground:${({ theme }) => theme.darkerBackground};   
        --darkBackground:${({ theme }) => theme.darkBackground};   
        --personalizedColor:${({ theme }) => theme.personalizedColor};   
    }
`;
