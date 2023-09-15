const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: initialMarkdown,
      convertedHTML: marked(initialMarkdown),
      isEditorFullHeight: false,
      isPreviewerFullHeight: false };

    this.handleChange = this.handleChange.bind(this);
  }

  /*Displays Editor's Text in the Previewer*/
  handleChange(event) {
    const markdownText = event.target.value;
    const convertedHTML = marked(markdownText);
    this.setState({ editorText: markdownText, convertedHTML });
  }

  render() {
    const { isEditorFullHeight, isPreviewerFullHeight } = this.state;
    const editorStyle = isEditorFullHeight ? { height: "100%" } : { height: "50%" };
    const previewerStyle = isPreviewerFullHeight ? { height: "100%" } : { height: "50%" };

    return /*#__PURE__*/(
      React.createElement("div", { id: "container" }, /*#__PURE__*/


      React.createElement("div", { id: "editor-box", style: editorStyle }, /*#__PURE__*/
      React.createElement("div", { id: "editor-top" }, /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/
      React.createElement("span", { id: "left" }, "Editor"))), /*#__PURE__*/


      React.createElement("textarea", { id: "editor", value: this.state.editorText, onChange: this.handleChange }, this.state.editorText)), /*#__PURE__*/



      React.createElement("div", { id: "preview-box", style: previewerStyle }, /*#__PURE__*/
      React.createElement("div", { id: "preview-top" }, /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/
      React.createElement("span", { id: "left" }, "Previewer"))), /*#__PURE__*/


      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: this.state.convertedHTML } }))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById("markdown-previewer"));