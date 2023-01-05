import Head from 'next/head'
import { useState } from 'react'
import Button, { ButtonVariants, LowLevelButtonProps, VariantsToProps } from '../components/button/button'


export default function Home() {
  
  const [buttonState, setButtonState] = useState<LowLevelButtonProps>({
    intent: "primary",
    loading: false,
    disabled: false,
    className: ""
  })


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`h-full p-10`}>
        <div className={`h-full`}>
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

        <div className={`h-full`}>

        </div>
      </main>
    </>
  )
}
