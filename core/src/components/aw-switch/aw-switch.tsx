import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

export type LabelPosition = 'top' | 'bottom' | 'left' | 'right'

@Component({
  tag: 'aw-switch',
  styleUrl: 'aw-switch.scss',
  shadow: true,
})
export class AwSwitch {

  @Prop()
  isOn?: boolean = false

  @Prop()
  label?: string

  @Prop()
  labelPosition?: LabelPosition = 'right'

  @Prop()
  disabled?: boolean = false

  @Event()
  toggle: EventEmitter<boolean>

  /**
   *
   */
  handleSwitchClick = () => {
    this.toggle.emit(!this.isOn)
  }

  /**
   * Render switch label in the correct position
   * @param position : ;
   * @returns switch label
   */
  renderLabel = (position: LabelPosition[]) => {
    if (this.label && position.includes(this.labelPosition)) {
      const switchLabelClasses = `
        switch_label
        ${this.disabled && 'disabled'}
      `
      return <span class={switchLabelClasses}>{this.label}</span>
    }
  }

  /**
   *
   * @returns
   */
  render() {

    const switchContainerClasses = `
      switch_container
      ${
        this.labelPosition === 'top' || this.labelPosition === 'bottom'
        ? `column ${this.labelPosition}`
        : `row ${this.labelPosition}`
      }
    `
    const switchBodyClasses = `
      switch_body
      ${this.isOn && 'on'}
      ${this.disabled && 'disabled'}
    `

    const switchSelectorClasses = `
      switch_selector
      ${this.isOn && 'on'}
      ${this.disabled && 'disabled'}
    `

    return (
      <Host>
        <div class={switchContainerClasses}>
          {this.renderLabel(['top','left'])}

          <div
            class={switchBodyClasses}
            onClick={this.handleSwitchClick}
          >
            <div
              class={switchSelectorClasses}
            >
            </div>
          </div>

          {this.renderLabel(['bottom','right'])}
        </div>
      </Host>
    );
  }

}
