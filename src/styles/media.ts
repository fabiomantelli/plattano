const media = {
    desktopoff: (styles: string): string => `
        @media only screen and (max-width: 1024px) {
            ${styles}
        }
    `,
    desktopon: (styles: string): string => `
        @media only screen and (min-width: 1025px) {
            ${styles}
        }
    `,
    mobileoff: (styles: string): string => `
        @media only screen and (max-width: 600px) {
            ${styles}
        }
    `,
    mobileon: (styles: string): string => `
        @media only screen and (min-width: 601px) {
            ${styles}
        }
    `
}

export default media
