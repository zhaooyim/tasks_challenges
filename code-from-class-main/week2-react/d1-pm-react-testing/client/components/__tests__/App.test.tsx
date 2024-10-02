// @vitest-environment jsdom

import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react/pure'
import '../../test/setup.tsx'
import App from '../App.tsx'

describe('<App />', () => {
  it('renders how we expect', () => {
    const { container } = render(<App />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="container"
        >
          <img
            alt="a spinning paw-print"
            class="spinner"
            src="/images/paw.png"
          />
          <h2>
            Doggos
          </h2>
          <div
            class="dog-wrapper"
          >
            <div
              class="dog"
            >
              <div
                class="dog-name-plate"
              >
                <h3
                  class="dog-name"
                >
                  Fido
                </h3>
                <span
                  class="dog-breed"
                >
                  Bulldog
                </span>
              </div>
              <button
                class="dog-superpower"
              >
                plays fetch
              </button>
              <img
                alt="a Bulldog"
                src="/images/bulldog.png"
              />
            </div>
          </div>
          <div
            class="dog-wrapper"
          >
            <div
              class="dog"
            >
              <div
                class="dog-name-plate"
              >
                <h3
                  class="dog-name"
                >
                  Bruce
                </h3>
                <span
                  class="dog-breed"
                >
                  Dachshund
                </span>
              </div>
              <button
                class="dog-superpower"
              >
                barks
              </button>
              <img
                alt="a Dachshund"
                src="/images/dachshund.png"
              />
            </div>
          </div>
        </div>
      </div>
    `)
  })
})
