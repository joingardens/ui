
import { useEffect, useState } from 'react'
import { Button, ButtonVariants, LowLevelButtonProps } from '../components/button/button'
import { Theme, Themes } from '../config/theme.config'


export default function Home() {

  const [buttonState, setButtonState] = useState<LowLevelButtonProps>({
    intent: "primary",
    loading: false,
    disabled: false,
    className: ""
  })
  const [themeState, setThemeState] = useState<Theme["themeName"]>("default")

  useEffect(() => {
    Themes.map(a => {
      if (a.themeClass) {
        if (a.themeName === themeState) {
          document.body.classList.add(a.themeClass)
          return
        }
        document.body.classList.remove(a.themeClass)
      }
    })
  }, [themeState])


  return (
    <>
      <main className={`p-10`}>
        <div className={`mb-10`}>
          <h2>Theme</h2>
          {Themes.map(theme => {
            return (
              <>
                <div className='flex'>
                  <input
                    onChange={() => {
                      setThemeState(theme.themeName)
                    }}
                    type="checkbox"
                    name="" id=""
                    checked={theme.themeName === themeState} />
                  <div className='ml-2 capitalize'>
                    {String(theme.themeName)}
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className={``}>
          <Button

            {...buttonState}
          >
            Hello!
          </Button>
          <div className='mt-6 grid grid-cols-3'>
            {Object.entries(ButtonVariants).map((a) => {
              const transformedA = a[0] as keyof LowLevelButtonProps
              if (transformedA === "className") {
                return (
                  <div>
                    <h2>{a[0]}</h2>
                    <div>
                      <input
                        onChange={(e) => {
                          setButtonState({
                            ...buttonState,
                            [transformedA]: e.target.value,
                          })
                        }}
                        type="text" value={buttonState[transformedA]} />
                    </div>
                  </div>
                )
              }
              return (
                <div>
                  <h2>{a[0]}</h2>
                  <div className='grid grid-cols-1 '>{Object.values(a[1]).map(b => {
                    return (
                      <div className='flex'>
                        <input
                          onChange={() => {
                            setButtonState({
                              ...buttonState,
                              [transformedA]: b,
                            })
                          }}
                          type="checkbox"
                          name="" id=""
                          checked={buttonState[transformedA] === b} />
                        <div className='ml-2'>
                          {String(b)}
                        </div>
                      </div>
                    )
                  })}</div>

                </div>
              )
            })}

          </div>
        </div>
      </main>
    </>
  )
}
