// Runs before paint to apply the stored theme and avoid a flash of the wrong
// color scheme. Injected into <head> as an inline script. Keep it tiny.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('aknTheme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;}}catch(e){}})();`;
