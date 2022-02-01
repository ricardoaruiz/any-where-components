import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'aw-button',
  styleUrl: 'aw-button.scss',
  shadow: true,
})
export class AwButton {

  /**
   * Button type
   * @values button, submit
   * @default button
   */
  @Prop()
  type?: 'button' | 'submit' = 'button'

  /**
   * Button variant
   * @values primary, danger, warning, outline
   * @default primary
   */
  @Prop()
  variant?: 'primary' | 'success' | 'danger' | 'warning' | 'outline' = 'primary'

  /**
   * Define if buttons is disabled
   * @default false
   */
  @Prop()
  disabled?: boolean = false

  /**
   * Define if button takes all width of container
   * or if container is a flex, the button assume flex=1
   */
  @Prop()
  blocked?: boolean = false

  /**
   * Render the component
   * @returns component
   */
  render() {

    /**
     * Define button classes
     */
    const classes = `
      ${this.variant}
      ${this.blocked && 'blocked'}
    `

    return (
      <button
        type={this.type}
        class={classes}
        disabled={this.disabled}
        tabIndex={1}
      >
        <slot />
      </button>
    );
  }

}
