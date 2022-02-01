import { Component, h, Prop } from '@stencil/core';

import { Direction, Size } from '../types'
import { getDirection, getSize } from '../functions'

@Component({
  tag: 'aw-icon-arrow',
  styleUrl: 'aw-icon-arrow.scss',
  shadow: true,
})
export class AwIconArrowDown {

  @Prop()
  color?: string = '#000'

  @Prop()
  direction?: Direction = 'down'

  @Prop()
  noTransition?: boolean = false

  @Prop()
  size?: Size = 'small'

  render() {
    const containerStyles = {
      ...getSize(this.size)
    }

    const svgStyles = {
      stroke: `${this.color}`,
      transform: `rotate(${getDirection(this.direction)})`,
      transition: `${this.noTransition ? 'unset' : 'all 0.4s ease-out'}`
    }

    return (
      <div style={containerStyles}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          style={svgStyles}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    );
  }

}
