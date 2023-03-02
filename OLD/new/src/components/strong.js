// Create strong component
// TODO should we replace content with child as we might have other components inside?
const strongComponent = (params) => {

    const { attributes, content } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<strong ${attributesStr}>${content}</strong>`;
}

export default strongComponent;


// const error = new Errors('strong');

// if (content == '') {
// error.add('No content');
// }
