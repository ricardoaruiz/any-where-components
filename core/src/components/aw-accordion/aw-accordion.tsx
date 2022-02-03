import { Component, h, Listen, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'aw-accordion',
  styleUrl: 'aw-accordion.scss',
  shadow: true,
})
export class AwAccordion {

  @Element() el: HTMLElement;

  @Prop()
  exclusive: boolean = false

  @State()
  openedContents: string[] = []

  @Listen('awOnAccordionContentToggle')
  onAccordionToogle(event: CustomEvent) {

    const content = event.detail

    if (!this.exclusive) {
      if (this.openedContents.includes(content)) {
        this.openedContents = this.openedContents.filter(item => item !== content)
        return
      }
      this.openedContents = [ ...this.openedContents, content ]
      return
    }

    this.openedContents = this.openedContents.includes(content) ? [] : [content]
  }

  componentDidUpdate() {
    this.el.childNodes.forEach(element => {
      if (element.nodeName.toLocaleLowerCase() === 'aw-accordion-content') {
        element["isOpened"] = this.openedContents.includes(element["name"]);
      }
    });
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }

}
