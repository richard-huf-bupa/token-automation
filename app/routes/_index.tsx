import { type MetaFunction } from '@remix-run/node'
import tokens from '../../dist/tokens.json'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  const handleChange = (event) => {
    event.preventDefault()
    console.log(event)
  }
  return (
    <div>
      <div>
        <header>
          <h1 sx={{ textSpacingTrim: 'trim-start' }}>Tokens</h1>
          <div>
            <input onChange={handleChange} name="query" label="Filter" />
            <button type="submit">Filter</button>
          </div>
        </header>

        <div>
          <ul style={{ listStyle: 'none' }}>
            {Object.keys(tokens.background).map((role) => {
              return (
                <li key={`token-${role}`}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                      gap: '1rem',
                    }}
                    key={`card-${role}`}
                  >
                    {Object.keys(tokens.background[role]).map((emphasis) => {
                      const EMPHASIS = tokens.background[role][emphasis]
                      return (
                        <div
                          style={{
                            boxShadow: '0 0 12px rgba(0, 0, 0, 0.4)',
                            marginBottom: '1rem',
                            borderRadius: '12px',
                          }}
                          key={`content-${emphasis}`}
                        >
                          {/* <RdsBox> */}
                          <input
                            type="color"
                            value={EMPHASIS}
                            style={{ width: '100%', height: '150px' }}
                          />
                          <div padding={200}>
                            <h3>
                              {role} {emphasis}
                            </h3>
                            {}
                            <p>
                              Color:{' '}
                              <pre>
                                <code>{EMPHASIS}</code>
                              </pre>
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

const tokens_A = {
  background: {
    neutral: {
      default: '#ffffff',
      hovered: '#f0f1f3',
      pressed: '#dde1e6',
      disabled: '#dde1e6',
    },
    brand: {
      default: '#0079c8',
      hovered: '#0652ae',
      pressed: '#00398a',
      selected: '#00398a',
      disabled: '#dde1e6',
    },
    danger: {
      default: '#d60023',
      hovered: '#ae132c',
      pressed: '#861e2f',
      disabled: '#ffffff',
    },
    positive: {
      default: '#017221',
      hovered: '#005a1a',
      pressed: '#004412',
    },
  },
}
