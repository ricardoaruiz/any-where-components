import { Component, h, Prop } from '@stencil/core';

import { Direction, Size } from '../types'
import { getDirection, getSize } from '../functions'

@Component({
  tag: 'aw-icon-search',
  styleUrl: 'aw-icon-search.scss',
  shadow: true,
})
export class AwIconSearch {

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

    const pathStyles = {
      fill: `${this.color}`,
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
            d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            style={pathStyles}
          />
        </svg>
      </div>
    );
  }

}
