export const FunctionHeaderPopup = () => {
    const html = document.querySelector('html');
	const header = document.querySelector('.header');
            
    let windowSize = 0;


	header && html.style.setProperty("--height-header", header.offsetHeight + "px");
	html.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
	if(windowSize !== window.innerWidth) {
		html.style.setProperty("--svh", window.innerHeight * 0.01 + "px");
	}
	
	windowSize = window.innerWidth;
}