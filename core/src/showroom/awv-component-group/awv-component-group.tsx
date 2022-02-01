import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'awv-component-group',
  styleUrl: 'awv-component-group.scss',
  shadow: true,
})
export class AwvComponentGroup {

  @Prop()
  title: string

  @State()
  isOpen: boolean = false

  @State()
  headerHovered: boolean = false

  toggleGroup() {
    this.isOpen = !this.isOpen
  }

  render() {

    const classes = `
      ${this.isOpen && 'opened'}
    `

    return (
      <div>
        <header
          class={classes}
          onClick={this.toggleGroup.bind(this)}
          onMouseOver={() => this.headerHovered = true}
          onMouseLeave={() => this.headerHovered = false}
        >
          <h1>{this.title}</h1>
          <aw-icon-arrow
            direction={this.isOpen ? 'up' : 'down'}
            color={this.headerHovered || this.isOpen ? 'white' : 'black'}
          >
          </aw-icon-arrow>
        </header>

        <div class={`content ${classes}`}>
          <slot />
        </div>
      </div>
    );
  }

}
