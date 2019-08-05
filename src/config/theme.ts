import { DefaultTheme } from 'styled-components';
import colors from './colors';

const theme: DefaultTheme = {
    mainFont: 'Julius Sans One',
    contentPadding: '20px',
    paddingSm: '5px',
    paddingMd: '15px',
    menuBorderHeight: '15px',
    menuBorderStyle: '1px solid',
    frameBackground: colors.frameBackground,
    textColor: colors.textColor,
    frameBorderColor: colors.frameBorderColor,
    linkHoverColor: colors.linkHoverColor,
    frameBorderHoverColor: colors.frameBorderHoverColor,
    menuBorderColor: colors.menuBorderColor,
};

export default theme;