const media = {
    desktopoff: (styles: string): string => `
        @media only screen and (max-width: 1023.98px) {
            ${styles}
        }
    `,
    desktopon: (styles: string): string => `
        @media only screen and (min-width: 1024px) {
            ${styles}
        }
    `,
    mobileoff: (styles: string): string => `
        @media only screen and (max-width: 687.98px) {
            ${styles}
        }
    `,
    mobileon: (styles: string): string => `
        @media only screen and (min-width: 688px) {
            ${styles}
        }
    `
}

export default media
