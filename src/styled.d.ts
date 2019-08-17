import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        mainFont: string;
        contentPadding: string;
        paddingMd: string;
        paddingMdOffsetSm: string;
        paddingSm: string;
        frameBackground: string;
        textColor: string;
        frameBorderColor: string;
        linkHoverColor: string;
        frameBorderHoverColor: string;
        menuBorderColor: string;
        menuBorderHeight: string;
        menuBorderStyle: string;
        darkBorderColor: string;
        galleryThumbWidth: string;
    }
}
