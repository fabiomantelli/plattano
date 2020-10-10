const media = {
    mobileOff: (styles: string): string => `
        @media only screen and (min-width: 43em) {
            ${styles}
        }
    `,
    mobileOn: (styles: string): string => `
        @media only screen and (max-width: 42.98em) {
            ${styles}
        }
    `,

    tabletOn: (styles: string): string => `
        @media only screen and (max-width: 61.98em) {
            ${styles}
        }
    `,
    tabletOff: (styles: string): string => `
        @media only screen and (min-width: 62em) {
            ${styles}
        }
    `,

    desktopOff: (styles: string): string => `
        @media only screen and (max-width: 42.98em) {
            ${styles}
        }
    `
}

export default media
