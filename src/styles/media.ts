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

    desktopOff: (styles: string): string => `
        @media only screen and (max-width: 42.98em) {
            ${styles}
        }
    `
}

export default media
