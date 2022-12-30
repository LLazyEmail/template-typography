// Create strong component
// TODO should we replace content with child as we might have other components inside?

function strongComponent (params: any) {


    const { attributes, content } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<strong ${attributesStr}>${content}</strong>`;
}

export default strongComponent;


// const error = new Errors('strong');

// if (content == '') {
// error.add('No content');
// }
