require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@0.11.1/min/vs/' }});

// Before loading vs/editor/editor.main, define a global MonacoEnvironment that overwrites
// the default worker url location (used when creating WebWorkers). The problem here is that
// HTML5 does not allow cross-domain web workers, so we need to proxy the instantiation of
// a web worker through a same-domain script
window.MonacoEnvironment = {
    getWorkerUrl: function(workerId, label) {
        return '/assets/js/monaco-proxy.js';
    }
};

require(['vs/editor/editor.main'], function() {
    const blocks = document.getElementsByClassName('to-vscode');
    [...blocks].forEach((block) => {
        // Create a new editor
        const div = document.createElement('div');
        div.classList.add('vscode');

        const editor = monaco.editor.create(div, {
            value: block.textContent.trim(),
            language: block.dataset.language || null,
            wordWrap: block.dataset.wordWrap || null,
            scrollBeyondLastLine: false
        });

        // Destroy the old element and replace with the vscode block
        block.parentNode.replaceChild(div, block)

        // Resize and show!
        div.style.height = editor.getScrollHeight() < 500 ? editor.getScrollHeight() + 10 : 500;
        editor.layout();
    });
});
