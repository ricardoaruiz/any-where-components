/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AwButton {
        /**
          * Define if button takes all width of container or if container is a flex, the button assume flex=1
         */
        "blocked"?: boolean;
        /**
          * Define if buttons is disabled
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Button type
          * @values button, submit
          * @default button
         */
        "type"?: 'button' | 'submit';
        /**
          * Button variant
          * @values primary, danger, warning, outline
          * @default primary
         */
        "variant"?: 'primary' | 'success' | 'danger' | 'warning' | 'outline';
    }
}
declare global {
    interface HTMLAwButtonElement extends Components.AwButton, HTMLStencilElement {
    }
    var HTMLAwButtonElement: {
        prototype: HTMLAwButtonElement;
        new (): HTMLAwButtonElement;
    };
    interface HTMLElementTagNameMap {
        "aw-button": HTMLAwButtonElement;
    }
}
declare namespace LocalJSX {
    interface AwButton {
        /**
          * Define if button takes all width of container or if container is a flex, the button assume flex=1
         */
        "blocked"?: boolean;
        /**
          * Define if buttons is disabled
          * @default false
         */
        "disabled"?: boolean;
        /**
          * Button type
          * @values button, submit
          * @default button
         */
        "type"?: 'button' | 'submit';
        /**
          * Button variant
          * @values primary, danger, warning, outline
          * @default primary
         */
        "variant"?: 'primary' | 'success' | 'danger' | 'warning' | 'outline';
    }
    interface IntrinsicElements {
        "aw-button": AwButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "aw-button": LocalJSX.AwButton & JSXBase.HTMLAttributes<HTMLAwButtonElement>;
        }
    }
}
