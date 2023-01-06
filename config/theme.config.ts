export interface Theme {
    themeName: typeof ThemeNames[keyof typeof ThemeNames],
    themeClass?: string
}

const ThemeNames = {
    DEFAULT: "default",
    FUNKY: "funky",
    HUYANKY: "huyanky"
} as const

export const Themes: readonly Theme[] = [
    {
        themeName: ThemeNames.FUNKY,
        themeClass: "funky-theme"
    },
    {
        themeName: ThemeNames.DEFAULT,
    },
    {
        themeName: ThemeNames.HUYANKY,
        themeClass: "huyanky-theme"

    }
] as const