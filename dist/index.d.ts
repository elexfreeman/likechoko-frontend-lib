/// <reference types="react" />
import * as styled_components from 'styled-components';

declare const SayHello: ({ name }: {
    name: string;
}) => JSX.Element;

declare const bg = "#2A2520";
declare const bgHover = "rgba(84, 84, 84, 0.26)";
declare const textBase = "#FFFFFF";
declare const textLink = "#E49B5D";
declare const textDisabled = "#5F5F5F";
declare const borderBase = "#4D453E";

declare const Color_d_bg: typeof bg;
declare const Color_d_bgHover: typeof bgHover;
declare const Color_d_textBase: typeof textBase;
declare const Color_d_textLink: typeof textLink;
declare const Color_d_textDisabled: typeof textDisabled;
declare const Color_d_borderBase: typeof borderBase;
declare namespace Color_d {
  export {
    Color_d_bg as bg,
    Color_d_bgHover as bgHover,
    Color_d_textBase as textBase,
    Color_d_textLink as textLink,
    Color_d_textDisabled as textDisabled,
    Color_d_borderBase as borderBase,
  };
}

declare const Container: styled_components.StyledComponent<"div", any, {}, never>;
declare const Title: styled_components.StyledComponent<"div", any, {}, never>;

declare const Base_d_Container: typeof Container;
declare const Base_d_Title: typeof Title;
declare namespace Base_d {
  export {
    Base_d_Container as Container,
    Base_d_Title as Title,
  };
}

export { Base_d as Base, Color_d as Color, SayHello };
