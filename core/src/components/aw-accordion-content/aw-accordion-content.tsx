import { Component, h, Prop, Event, EventEmitter, Watch, State } from '@stencil/core';

@Component({
  tag: 'aw-accordion-content',
  styleUrl: 'aw-accordion-content.scss',
  shadow: true,
})
export class AwAccordionContent {

  @Prop({
    reflect: true
  })
  name: string

  @Prop()
  isOpened?: boolean = false

  @Prop()
  title: string

  @State()
  isHeaderHovered: boolean = false

  @Watch('isOpened')
  onOpen(newValue: boolean) {
    this.isOpened = newValue
  }

  @Event({
    eventName: 'awOnAccordionContentToggle',
    bubbles: true
  })
  toogle: EventEmitter<string>

  handleClick(event: MouseEvent) {
    const clickedElement = (event.target as HTMLElement)
    if(clickedElement.nodeName.toLowerCase() === 'header') {
      this.toogle.emit(this.name)
    }
  }

  componentWillLoad() {
    if (!this.name) throw new Error('<aw-accordion-content> => The name props is required')
  }

  render() {

    const mainContentClasses = `
      main-content
      ${this.isOpened ? '--opened' : ''}
    `

    return this.name ? (
      <div
        id={this.name}
        class="accordion_content"
        onClick={this.handleClick.bind(this)}
      >
        <header
          onMouseEnter={() => this.isHeaderHovered = true}
          onMouseLeave={() => this.isHeaderHovered = false}
        >
          <h3>{this.title}</h3>
          <aw-icon-arrow
            color="white"
            direction={this.isOpened ? 'up' : 'down'}
          >
          </aw-icon-arrow>
        </header>

        <section class={mainContentClasses}>
          <slot />
        </section>
      </div>
    ): null
  }

}
