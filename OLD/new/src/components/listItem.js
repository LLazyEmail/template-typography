import stringifyAttributes from 'stringify-attributes';


const listItemComponent = (params) => {

    const { attributes, children } = params;
    const attributesStr = stringifyAttributes(attributes);

    return `<li ${attributesStr}>${children}</li>`;;
}

export default listItemComponent;
