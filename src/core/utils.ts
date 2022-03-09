import createCache from '@emotion/cache';

const debug = process.env.NEXT_PUBLIC_DEBUG_PRINT;
export const debug_print = (...args: any) => {
    if (debug != "true") return;
    console.log(...args);
}


// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.
export const createEmotionCache = () => {
    return createCache({key: 'css', prepend: true});
}