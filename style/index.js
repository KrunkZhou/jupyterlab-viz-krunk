import './base.css';

/*!
Viz.js 3.6.0
Copyright (c) 2023 Michael Daines

This distribution contains other software in object code form:
Graphviz https://www.graphviz.org
Expat https://libexpat.github.io
*/

function handleLanguageVizElement(element) {
    const textContent = element.textContent;
    // console.log("A <code> element with the class 'language-viz' is present: " + textContent);
    Viz.instance().then(function(viz) {
	  try {
	    if (!element.parentNode) return;
	    var svg = viz.renderSVGElement(textContent);
	    element.parentNode.replaceChild(svg, element);
	  } catch (error) {
	    // console.error("Rendering SVG failed:\n", error);
	    var errorDiv = document.createElement('div');
	    errorDiv.textContent = "Error rendering Graphviz:\n" + error.message;
	    errorDiv.style.color = 'red';
	    element.parentNode.replaceChild(errorDiv, element);
	  }
	}).catch(function(error) {
	  console.error("Viz.js instance initialization failed:\n", error);
	  var errorDiv = document.createElement('div');
	  errorDiv.textContent = "Error initializing Viz.js:\n" + error.message;
	  errorDiv.style.color = 'red';
	  element.parentNode.replaceChild(errorDiv, element);
	});
}

function checkForLanguageViz() {
    const elements = document.querySelectorAll("code.language-graphviz");
    elements.forEach(handleLanguageVizElement);
}

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE && node.matches("code.language-graphviz")) {
                handleLanguageVizElement(node);
            }
            if (node.nodeType === Node.ELEMENT_NODE) {
                const nestedElements = node.querySelectorAll("code.language-graphviz");
                nestedElements.forEach(handleLanguageVizElement);
            }
        });
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

checkForLanguageViz();

